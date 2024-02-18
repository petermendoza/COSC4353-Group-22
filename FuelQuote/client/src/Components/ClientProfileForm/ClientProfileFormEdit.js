import React from "react";
import { useState } from "react";
import './ClientProfileForm.css'
import { Link } from "react-router-dom";

const ClientProfileFormEdit = () => {
        const [charCountFullName, setCharCountFullName] = useState(0);
        const charLimitFullName = 50;
    
        const [charCountAddress1, setCharCountAddress1] = useState(0);
        const charLimitAddress1 = 100;

        const [charCountAddress2, setCharCountAddress2] = useState(0);
        const charLimitAddress2 = 100;

        const [charCountCity, setCharCountCity] = useState(0);
        const charLimitCity = 100;

        const [charCountZipcode, setCharCountZipcode] = useState(0);
        const charLimitZipcode = 9;

    return (
        <div class = "wrapper-large">
            <h1>Edit Profile</h1>
            <p>All fields marked with * are required</p>
                <div className = "input-box-large">
                        <input type = "fullName" placeholder = 'Full Name*' required minLength = "1" maxLength = "50" onChange = {
                            (e) => setCharCountFullName(e.target.value.length)
                        }/>
                        <p class = "charLimit">{charLimitFullName - charCountFullName} characters remaining.</p>
                </div>            
                <div className = "input-box-large">
                        <input type = "address1" placeholder = 'Address 1*' required minLength = "1" maxLength = "100" onChange = { 
                            (e) => setCharCountAddress1(e.target.value.length)
                        }/>
                        <p class = "charLimit">{charLimitAddress1 - charCountAddress1} characters remaining.</p>
                </div>
                <div className = "input-box-large">
                        <input type = "address2" placeholder = 'Address 2 (optional)' required minLength = "0" maxLength = "100" onChange = { 
                            (e) => setCharCountAddress2(e.target.value.length)
                        }/>
                        <p class = "charLimit">{charLimitAddress2 - charCountAddress2} characters remaining.</p>
                </div>
                <div className = "input-box-small">
                        <input type = "city" placeholder = 'City*' required minLength = "1" maxLength = "100" onChange = { 
                            (e) => setCharCountCity(e.target.value.length)
                        }/>
                        <input type = "zipcode" placeholder = 'Zipcode*' required minLength = "1" maxLength = "9" onChange = { 
                            (e) => setCharCountZipcode(e.target.value.length)
                        }/>    
                        <select>
                        {/* HARDCODED VALUES FOR NOW (WILL PROLLY BE FINE EVEN LATER IDK)*/}
                        <option value="State">State*</option>
                        <option value="AL">AL</option>
                        </select>                                            
                        <p class = "charLimit">{charLimitCity - charCountCity} characters remaining.</p>
                        <p class="charLimit">{charLimitZipcode - charCountZipcode} characters remaining.</p>
                </div>
                <Link to = "/Profile">
                        <button>Save Changes</button>
                </Link>
                <Link to = "/Profile">
                        <button>Cancel</button>
                </Link>

        </div>
    );

};

export default ClientProfileFormEdit;