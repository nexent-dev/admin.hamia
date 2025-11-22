import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import type { AppRoute } from "../interfaces/route";

interface CollapsableNavigationProps {
    title: string;
    icon?: React.ElementType;
    children?: AppRoute[];
    rootPath?: string;
}

export default function CollapsableNavigation({
    title,
    icon: Icon,
    children = [],
    rootPath,
}: CollapsableNavigationProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-100 mb-2">
            {/* Parent button */}
            <button
                type="button"
                className="btn d-flex justify-content-between align-items-center w-100 text-start rounded-0 py-2 px-3"
                onClick={() => setOpen(!open)}
            >
                <div className="d-flex align-items-center gap-2">
                    {Icon && <Icon size={18} />}
                    <span className="fw-medium" style={{ color: "var(--text-dimmer)" }}>{title}</span>
                </div>
                {children.length > 0 &&
                    (open ? <FiChevronDown style={{ color: "var(--text-dimmer)" }} size={18} /> : <FiChevronRight style={{ color: "var(--text-dimmer)" }} size={18} />)}
            </button>

            {/* Child items */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ul className="list-unstyled ps-4 mb-0">
                    {children.map((child, i) => child.render ? (
                        <li key={i} className="my-1">
                            <NavLink
                                to={`${rootPath}/${child.path}`}
                                className={({ isActive }) =>
                                    `text-decoration-none d-flex align-items-center gap-2 px-2 py-1 ${isActive
                                        ? "active-navigation"
                                        : "text-secondary hover:bg-light"
                                    }`
                                }
                            >
                                {child.icon && <child.icon size={16} />}
                                {child.title}
                            </NavLink>
                        </li>
                    ) : null)}
                </ul>
            </Collapse>
        </div>
    );
}
