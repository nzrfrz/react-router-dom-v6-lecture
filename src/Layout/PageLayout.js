import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { userLogout } from "../_services";

import "./pageLayout.css";

export const PageLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="layout-container">
            <div className="sidebar">
                <NavLink className="sidebar-items" to={"/dashboard"}>
                    Dashboard
                </NavLink>
                <NavLink className="sidebar-items" to={"/sidebar-page-one"}>
                    Page One
                </NavLink>
                <NavLink className="sidebar-items" to={"/sidebar-page-two"}>
                    Page Two
                </NavLink>
            </div>
            <div className="right-side-container">
                <div className="navbar">
                    <NavLink className="sidebar-items" to={"/about"}>
                        About
                    </NavLink>
                    <NavLink className="sidebar-items" to={"/profile"}>
                        Profile
                    </NavLink>
                    <button 
                        onClick={() => {
                            userLogout(navigate);
                        }}
                    >
                        LOGOUT
                    </button>
                </div>
                <div className="content">
                    <Outlet />
                </div>
                <div className="footer">
                    Copyright September 12, 2022 @ nzrfrz
                </div>
            </div>
        </div>
    );
};