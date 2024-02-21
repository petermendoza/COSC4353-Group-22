import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {

    return (
        <div className = 'wrapper'>
            <form action = "">
                <h1>Welcome</h1>
                <div className = "input-box">
                    <input type = "username" placeholder = 'Username' required />
                    <FaUser className = 'icon'/>
                </div>
                <div className = "input-box">
                    <input type = "password" placeholder = 'Password' required />
                    <FaLock className = 'icon'/>
                </div>
                
                <Link to = "/Profile">
                    <button type = "submit">Login</button>
                </Link>

                <div class = "divider">
                    <hr></hr>
                    <p> OR </p>
                    <hr></hr>
                </div>

                <Link to = "/RegisterPage">
                    <button type = "register-link">Create Account</button>
                </Link>
            </form>
        </div>
    );
};

export default LoginForm