import React from "react";
import './loginform.css';
import { FaUser, FaLock } from "react-icons/fa";

const Loginform = () => {

    return (
        <div className = 'wrapper'>
            <form action = "">
                <h1>Login</h1>
                <div className = "input-box">
                    <input type = "username" placeholder = 'Username' required />
                    <FaUser className = 'icon'/>
                </div>
                <div className = "input-box">
                    <input type = "password" placeholder = 'Password' required />
                    <FaLock className = 'icon'/>
                </div>

                <button type = "submit"><a href = "/ClientProfilePage">Login</a></button>

                <button type = "register-link">Create Account</button>
            </form>
        </div>
    );
};

export default Loginform