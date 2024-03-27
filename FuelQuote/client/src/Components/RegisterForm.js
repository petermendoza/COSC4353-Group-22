import '../Style/Components/RegisterForm.css';

import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Register</h1>
        <p className='user-instructions'> Enter a Username: </p>
        <div className='input-box'>
          <input type='username' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <p className='user-instructions'> Enter a Password: </p>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>

        <Link to='/Profile'>
          <button type='submit'>Register</button>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
