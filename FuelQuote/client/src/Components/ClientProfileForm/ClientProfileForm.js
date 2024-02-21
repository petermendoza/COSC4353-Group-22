import '../../Style/Components/ClientProfileForm.css';

import React from "react";
import { Link } from "react-router-dom";

const ClientProfileForm = () => {

    return (
        <div class = "wrapper">
            <p>WILL FINISH TOMORROW</p>
            <Link to = "/Profile/Edit">
                <button>Edit Profile</button>
            </Link>
        </div>
    );
};

export default ClientProfileForm;