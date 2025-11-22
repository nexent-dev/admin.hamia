import { useEffect } from "react";
import useRefreshToken from "./useRefresh";
import useAuth from "./useAuth";
import API from "../services/api.services";
import { useSetRecoilState } from "recoil";
import { systemGlobalLoadingIndicator, systemGlobalToastMessage } from "../context/global.states";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axios";;


let apiServices: API = new API();

const useApiServices = (signal?: any) => {
    const _controller: AbortController = new AbortController();

    const refresh = useRefreshToken();
    const { auth }: any = useAuth();
    const setGlobalLoadingIndicator = useSetRecoilState(systemGlobalLoadingIndicator);
    const setGlobalToastMessage = useSetRecoilState(systemGlobalToastMessage);

    ///////////////////////////////////////////////////////////////////////////////////// //

    apiServices.axiosInstance.defaults.signal = signal;
    
    ///////////////////////////////////////////////////////////////////////////////////// //
    
    useEffect(()=>{
        const abortListener: any = _controller.signal.addEventListener("abort", () => {
            // console.log(exception)
        })
        const requestIntercept: any = apiServices.axiosInstance.interceptors.request.use(
            (config: any) => {
                if(!config?.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.access_token}`
                }
                setGlobalLoadingIndicator(true)
                return config;
            },
            (error: any) => {
                setGlobalLoadingIndicator(false)
                setGlobalToastMessage({
                    'success': false,
                    'message': error?.message
                })
                return Promise.reject(error)
            }
        )

        const responseIntercept: any = apiServices.axiosInstance.interceptors.response.use(
            (response: any) => {
                response.headers['Authorization'] = `Bearer ${auth?.access_token}`;
                setGlobalLoadingIndicator(false);
                setGlobalToastMessage({
                    'success': response?.data?.success ?? false,
                    'message': response?.data?.message || "Done"
                })
                return response;
            },
            async (error: any) => {
                const previous = error?.config;
                if((error?.response?.status ===  403 || error?.response?.status ===  401) && !previous?.sent){
                    previous.sent = true;
                    const newAccessToken = await refresh();
                    console.log(newAccessToken)
                    previous.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    let _apiServices = apiServices.axiosInstance(previous)
                    return _apiServices
                } else if (error?.response?.status !== 403 && error?.response?.status !== 401){
                    if(error?.name == "CanceledError") {
                        setGlobalToastMessage({
                            'success': false,
                            'message': "Switching routes...."
                        })
                        return Promise.reject(error);
                    }
                    setGlobalLoadingIndicator(false);
                    setGlobalToastMessage({
                        'success': false,
                        'message': error?.message
                    })
                    return Promise.reject(error);
                } else {
                    // console.log(error)
                }
                setGlobalLoadingIndicator(false);
                return Promise.reject(error);
            }
        )
        // ////////////////////////////////////////// //
        return () => {
            apiServices.axiosInstance.interceptors.request.eject(requestIntercept)
            apiServices.axiosInstance.interceptors.response.eject(responseIntercept)
            _controller.signal.removeEventListener("abort", abortListener)
            apiServices.abortRequest();
        }
    }, [auth, refresh])
    
    // ////////////////////////////////////////////// //
    
    useEffect(()=>{
    }, [auth])

    // ////////////////////////////////////////////// //
    return apiServices;
}
 
export default useApiServices;