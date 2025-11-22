import { MiniFooter } from "../utils/mini.footer";
import { Outlet } from "react-router-dom";
import { AppBar } from "../utils/appbar";
import { Navbar } from "../utils/navbar";
import { useState } from "react";

export const ProtectedLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const sidebarWidth = sidebarCollapsed ? 60 : 200;

    return (
        <div className="w-100 h-100 d-flex flex-column justify-content-between">

            <div className="workspace d-flex h-100 w-100">

                <Navbar collapsed={sidebarCollapsed} />

                <div className="content d-flex flex-column position-relative" style={{ width: `calc(100% - ${sidebarWidth}px)`, overflowX: 'hidden', overflowY: 'auto' }}>

                    <AppBar onToggleSidebar={() => setSidebarCollapsed((prev) => !prev)} />

                    <div className="app-content p-4">
                        <Outlet />
                    </div>

                </div>

            </div>

            <MiniFooter />

        </div>
    );
}
