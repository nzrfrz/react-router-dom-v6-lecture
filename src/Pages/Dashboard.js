import React from "react";

import "./dashboard.css";

export const Dashboard = () => {

    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    // console.log(userCredentials);

    return (
        <div className="dashboard-container">
            <text>!!! WELCOME TO DASHBOARD !!!</text>
            <text>You are LOGIN as</text>
            <text style={{ fontSize: "30px", color: "teal" }}>{userCredentials.userName}</text>
        </div>
    );
};