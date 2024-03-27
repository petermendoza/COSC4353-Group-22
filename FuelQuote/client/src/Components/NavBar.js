import '../Style/Components/NavBar.css';

import React from 'react';

const NavBar = () => {
  return (
    <div className='NavBarWrapper'>
      <div className='navButtons'>
        <div className='linkBox'>
          <a className='links' href='/LoginPage'>
						Login
          </a>
        </div>

        <div className='linkBox'>
          <a className='links' href='/Profile'>
						Profile
          </a>
        </div>

        <div className='linkBox'>
          <a className='links' href='/FuelQuoteFormPage'>
						Get a Quote
          </a>
        </div>

        <div className='linkBox'>
          <a className='links' href='/FuelQuoteHistoryPage'>
						History
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
