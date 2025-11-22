import { useEffect } from 'react';
import API from '../services/api.services';
import useAuth from './useAuth';

const apiServices: API = new API()

const useRefreshToken = () => {

    const { auth, setAuth }: any = useAuth()

    useEffect(()=>{
    }, [auth])

    const refresh = async () => {
        const response: any = await apiServices.refresh().catch((_e: any)=>{})
        setAuth((prev: any) => {
            return {
                ...prev,
                access_token: response?.data?.access_token,
            }
        })
        if(response?.data?.access_token){
            return response?.data?.access_token;
        }
        else
            return 'invalid';
    }
    return refresh;
}

export default useRefreshToken;