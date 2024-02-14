import React from "react";

const ClientProfileForm = () => {

    return (
        <div class = "wrapper">
            <p>CLIENT PROFILE</p>
            <div class = "inputfields">
                <div className = "input-box">
                    <div class = "input-row-1">
                        <input type = "fullName" placeholder = 'Full Name' required minLength = "1" maxLength = "50"/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ClientProfileForm;