import { Outlet } from "react-router-dom"
import logo from "../assets/logo-color.png"
import { MiniFooter } from "../utils/mini.footer"
export const AuthLayout = () => {
    return (
        <div className="w-100 h-100 d-flex flex-column">
            <div className="flex-grow-1 d-flex auth-layout">
                <div className="auth-panel-left d-none d-md-flex align-items-center justify-content-center">
                    <div className="auth-hero-wrapper">
                        <div className="auth-hero-circle d-flex justify-content-center align-items-center">
                            <img src={logo} alt="Hamia Admin" className="mb-4 auth-logo" />
                        </div>
                        <div className="auth-hero-circle-blur" />
                    </div>
                </div>
                <div className="auth-panel-right d-flex flex-column justify-content-center align-items-start px-4">
                    <div className="auth-card">
                        <Outlet />
                    </div>
                </div>
            </div>
            <MiniFooter />
        </div>
    );
}
