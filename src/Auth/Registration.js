import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { userRegistration } from "../_services";

import "./auth.css"

export const Registration = () => {
    const navigate = useNavigate();

    const [userCredentials, setUserCredential] = useState({userName: "", email: "", password: ""});
    // console.log(userCredentials);

    return (
        <div className="registration-page-container">
            REGISTRATION
            <div className="login-form-container">
                <input 
                    className="input-field"
                    placeholder="user name"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, userName: e.target.value});
                    }}
                />
                <input 
                    className="email-field"
                    placeholder="email"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, email: e.target.value});
                    }}
                />
                <input 
                    className="password-input-field"
                    placeholder="password"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, password: e.target.value});
                    }}
                />
                <input 
                    className="password-input-field"
                    placeholder="confirm password"
                />
            </div>
            <button 
                className="button-register" 
                onClick={() => {
                    userRegistration(userCredentials, navigate);
                }}
            >
                REGISTER
            </button>
            OR
            <button className="registration-page-button" onClick={() => navigate("/login")}>
                LOGIN
            </button>
        </div>
    );
};