import './NavBar.css';

import React from 'react';
import { FaRegClock } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className = 'NavBarWrapper'>
            
            <div className = "navButton">
                <a href = "/Profile">
                    <FaRegClock className = 'navIcon'/>
                </a>
            </div>

        </div>
    );
};

export default NavBar;