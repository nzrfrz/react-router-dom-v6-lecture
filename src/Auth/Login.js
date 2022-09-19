import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../_services";

import "./auth.css"

export const Login = () => {
    const navigate = useNavigate();

    const [userCredentials, setUserCredentials] = useState({user: "", password: ""});

    return (
        <div className="login-page-container">
            LOGIN
            <div className="login-form-container">
                <input 
                    className="input-field"
                    placeholder="user name or email"
                    onChange={(e) => {
                        setUserCredentials({...userCredentials, user: e.target.value})
                    }}
                />
                <input 
                    className="password-input-field"
                    placeholder="password"
                    onChange={(e) => {
                        setUserCredentials({...userCredentials, password: e.target.value})
                    }}
                />
            </div>
            <button 
                className="login-page-button" 
                onClick={() => {
                    userLogin(userCredentials, navigate);
                }}
            >
                LOGIN
            </button>
            Don't have an account ?
            <button className="button-registration" onClick={() => navigate("/registration")}>
                REGISTRATION
            </button>
        </div>
    )
}