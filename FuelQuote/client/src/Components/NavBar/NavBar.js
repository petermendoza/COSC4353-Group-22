import './NavBar.css';

import React from 'react';

const NavBar = () => {
    return (
        <div className = 'NavBarWrapper'>
            
            <div className = "navButtons">

            <a className = "links" href = "/LoginPage">
                    Login 
                </a>

                <a className = "links" href = "/Profile">
                    Profile 
                </a>

                <a className = "links" href = "/FuelQuoteFormPage">
                    Get a Quote 
                </a>

                <a className = "links" href = "/FuelQuoteHistoryPage">
                    History 
                </a>
            </div>

        </div>
    );
};

export default NavBar; 