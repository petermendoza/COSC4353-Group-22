import '../../Style/Components/ClientProfileForm.css';

import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const ClientProfileForm = () => {
  const [profile, setProfile] = useState(null);

  // Fetches profile info
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/Profile');
      const json = await response.json();

      if (response.ok) {
        setProfile(json);
      }
    };

    fetchProfile();
  }, []);

  return (
    profile && (
      <div className='wrapper-large' id='wrapper-profile'>
        <h1>Profile</h1>
        <div className='profile-row'>
          <p>Full Name:</p>
          <p>{profile.name}</p>
        </div>
        <div className='profile-row'>
          <p>Address 1:</p>
          <p>{profile.address1}</p>
        </div>
        <div className='profile-row'>
          <p>Address 2:</p>
          <p>{profile.address2}</p>
        </div>
        <div className='profile-row'>
          <p>City:</p>
          <p>{profile.city}</p>
        </div>
        <div className='profile-row'>
          <p>Zipcode:</p>
          <p>{profile.zipcode}</p>
        </div>
        <div className='profile-row'>
          <p>State:</p>
          <p>{profile.state}</p>
        </div>

        <Link to='/Profile/Edit'>
          <button>Edit Profile</button>
        </Link>
      </div>
    )
  );
};

export default ClientProfileForm;
