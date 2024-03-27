import '../Style/Components/LoginForm.css';

import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/UserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      // If validation from backend passes
      if (data.message === 'Login successful') {
        // Redirect Client Profile after successful login
        window.location.href = '/Profile';
      } else {
        // If validation does not pass
        console.log(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='wrapper'>
      <form action='' onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <div className='input-box'>
          <input
            type='username'
            placeholder='Username'
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon' />
        </div>

        <button type='submit'>Login</button>

        <div class='divider'>
          <hr></hr>
          <p> OR </p>
          <hr></hr>
        </div>

        <Link to='/RegisterPage'>
          <button type='register-link'>Create Account</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
