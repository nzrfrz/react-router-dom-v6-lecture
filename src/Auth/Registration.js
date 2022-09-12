import React from "react";
import { useNavigate } from "react-router-dom";

import "./auth.css"

export const Registration = () => {
    const navigate = useNavigate();
    return (
        <div className="registration-page-container">
            REGISTRATION
            <button className="registration-page-button" onClick={() => navigate("/login")}>
                LOGIN
            </button>
        </div>
    );
};