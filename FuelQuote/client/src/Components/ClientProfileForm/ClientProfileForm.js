import React from "react";
import { useState } from "react";
import './ClientProfileForm.css';

const ClientProfileForm = () => {
    const [charCountFullName, setCharCountFullName] = useState(0);
    const charLimitFullName = 50;

    const [charCountAddress1, setCharCountAddress1] = useState(0);
    const charLimitAddress1 = 100;

    return (
        <div class = "wrapper">
            <p>CLIENT PROFILE</p>
            <div class = "inputfields">
                <div className = "input-box">
                    <input 
                        type = "fullName" 
                        placeholder = 'Full Name' 
                        required 
                        minLength = "1" 
                        maxLength = "50"
                        onChange = {
                            (e) => setCharCountFullName(e.target.value.length)
                        }
                    />
                    <p class = "charLimit">{charLimitFullName - charCountFullName} characters remaining.</p>
                </div>

                <div className = "input-box">
                    <input 
                        type = "address1" 
                        placeholder = 'Address 1' 
                        required 
                        minLength = "1" 
                        maxLength = "100"
                        onChange = { 
                            (e) => setCharCountAddress1(e.target.value.length)
                        }
                    />
                    <p class = "charLimit">{charLimitAddress1 - charCountAddress1} characters remaining.</p>
                </div>
            </div>
        </div>
    );

};

export default ClientProfileForm;