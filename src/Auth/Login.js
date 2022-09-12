import React from "react";
import { useNavigate } from "react-router-dom";

import "./auth.css"

export const Login = () => {
    const navigate = useNavigate();

    const login = () => {
        // console.log("LOGIN");
        localStorage.setItem("user", "userCredentials");
        navigate("/dashboard");
    };

    return (
        <div className="login-page-container">
            LOGIN PAGE
            <button className="login-page-button" onClick={() => login()}>
                LOGIN
            </button>
            <button onClick={() => navigate("/registration")}>
                REGISTRATION
            </button>
        </div>
    )
}