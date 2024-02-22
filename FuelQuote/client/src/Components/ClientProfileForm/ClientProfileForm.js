import '../../Style/Components/ClientProfileForm.css';

import React from "react";
import { Link } from "react-router-dom";

const ClientProfileForm = () => {
    const fullName = 'Anita M. Wynn';
    const address1 = 'Main st 123';
    const address2 = 'N/A';
    const city = 'Houston';
    const zipcode = '77204'
    const state = 'TX'

    return (
        <div class = "wrapper-large" id="wrapper-profile">
            <h1>Profile</h1>
            <div class="profile-row">
                <p>Full Name:</p>
                <p>{fullName}</p>
            </div>
            <div class="profile-row">
                <p>Address 1:</p>
                <p>{address1}</p>
            </div>
            <div class="profile-row">
                <p>Address 2:</p>
                <p>{address2}</p>
            </div>
            <div class="profile-row">
                <p>City:</p>
                <p>{city}</p>
            </div>
            <div class="profile-row">
                <p>Zipcode:</p>
                <p>{zipcode}</p>
            </div>
            <div class="profile-row">
                <p>State:</p>
                <p>{state}</p>
            </div>

            <Link to = "/Profile/Edit">
                <button>Edit Profile</button>
            </Link>
        </div>
    );
};

export default ClientProfileForm;