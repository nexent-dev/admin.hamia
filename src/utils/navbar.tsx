import type { FC } from "react";
import logo from "../assets/main-logo-color.png";
import collapsedLogo from "../assets/logo-color.png";
import { protected_routes, flat_protected_routes } from "../utils/navigation";
import type { AppRoute } from "../interfaces/route";
import { NavLink } from "react-router-dom";
import CollapsableNavigation from "../components/collapsable-navigation";

interface NavbarProps {
    collapsed?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ collapsed = false }) => {
    const sidebarWidth = collapsed ? 60 : 200;

    const expandedContent = (
        <div className="menu-item d-flex flex-column justify-content-center align-items-start gap-2">
            {protected_routes.map((route: AppRoute) => {
                if (route.type === 'ParentRoute' && route.render) {
                    return (
                        <CollapsableNavigation
                            key={route.slug || route.path}
                            title={route.title!}
                            rootPath={route.path}
                            icon={route.icon}
                            children={route.children}
                        />
                    );
                }

                if (route.render) {
                    return (
                        <NavLink
                            key={route.slug || route.path}
                            to={route.path}
                            className={({ isActive }) =>
                                `w-100 text-decoration-none d-flex align-items-center gap-2 px-2 py-2 ${
                                    isActive ? "active-navigation" : "text-secondary hover:bg-light"
                                }`
                            }
                        >
                            {route.icon && <route.icon size={16} />}
                            {route.title}
                        </NavLink>
                    );
                }

                return null;
            })}
        </div>
    );

    const collapsedContent = (
        <div className="menu-item d-flex flex-column justify-content-center align-items-center gap-2">
            {flat_protected_routes
                .filter((route: AppRoute) => route.render)
                .map((route: AppRoute) => (
                    <NavLink
                        key={route.slug || route.path}
                        to={route.path}
                        className={({ isActive }) =>
                            `w-100 text-decoration-none d-flex align-items-center justify-content-center px-2 py-2 ${
                                isActive ? "active-navigation" : "text-secondary hover:bg-light"
                            }`
                        }
                    >
                        {route.icon && <route.icon size={18} />}
                    </NavLink>
                ))}
        </div>
    );

    return (
        <div
            className="navigation px-2"
            style={{ width: `${sidebarWidth}px`, borderRight: '1px solid var(--border-color)', backgroundColor: 'var(--background-dimmer)' }}
        >
            <div className="logo d-flex justify-content-center align-items-center m-2" style={{ height: '50px' }}>
                <img src={collapsed ? collapsedLogo : logo} alt="" style={{ width: collapsed ? '100%' : '100%' }} />
            </div>
            <div className="menu mt-4">
                {collapsed ? collapsedContent : expandedContent}
            </div>
        </div>
    );
}
