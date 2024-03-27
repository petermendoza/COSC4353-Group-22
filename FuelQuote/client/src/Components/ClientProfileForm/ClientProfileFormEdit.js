import '../../Style/Components/ClientProfileForm.css';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientProfileFormEdit = (props) => {
  let {
    handleSave,
    setName,
    setAddress1,
    setAddress2,
    setCity,
    setZipcode,
    setState,
  } = props.registerState;

  // Field Lengths and Limits
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
    <div class='wrapper-large'>
      <h1>Edit Profile</h1>
      <p>All fields marked with * are required</p>
      <form method='POST' onSubmit={handleSave}></form>
      <div className='input-box-large'>
        <input
          type='text'
          placeholder='Full Name*'
          required
          minLength='1'
          maxLength='50'
          onChange={(e) => {
            setCharCountFullName(e.target.value.length);
            setName(e.target.value);
          }}
        />
        <p className='charLimit'>
          {charLimitFullName - charCountFullName} characters remaining.
        </p>
      </div>
      <div className='input-box-large'>
        <input
          type='text'
          placeholder='Address 1*'
          required
          minLength='1'
          maxLength='100'
          onChange={(e) => {
            setCharCountAddress1(e.target.value.length);
            setAddress1(e.target.value);
          }}
        />
        <p className='charLimit'>
          {charLimitAddress1 - charCountAddress1} characters remaining.
        </p>
      </div>
      <div className='input-box-large'>
        <input
          type='text'
          placeholder='Address 2 (optional)'
          required
          minLength='0'
          maxLength='100'
          onChange={(e) => {
            setCharCountAddress2(e.target.value.length);
            setAddress2(e.target.value);
          }}
        />
        <p className='charLimit'>
          {charLimitAddress2 - charCountAddress2} characters remaining.
        </p>
      </div>
      <div className='input-box-small'>
        <input
          type='text'
          placeholder='City*'
          required
          minLength='1'
          maxLength='100'
          onChange={(e) => {
            setCharCountCity(e.target.value.length);
            setCity(e.target.value);
          }}
        />

        <input
          type='text'
          placeholder='Zipcode*'
          required
          minLength='1'
          maxLength='9'
          onChange={(e) => {
            setCharCountZipcode(e.target.value.length);
            setZipcode(e.target.value);
          }}
        />

        <select onChange={(e) => setState(e.target.value)}>
          {/* HARDCODED VALUES FOR NOW (WILL PROLLY BE FINE EVEN LATER IDK)*/}
          <option value='NULL'>State*</option>
          <option value='AL'>AL</option>
          <option value='AK'>AK</option>
          <option value='AZ'>AZ</option>
          <option value='AR'>AR</option>
          <option value='CA'>CA</option>
          <option value='CO'>CO</option>
          <option value='CT'>CT</option>
          <option value='DE'>DE</option>
          <option value='DC'>DC</option>
          <option value='FL'>FL</option>
          <option value='GA'>GA</option>
          <option value='HI'>HI</option>
          <option value='ID'>ID</option>
          <option value='IL'>IL</option>
          <option value='IN'>IN</option>
          <option value='IA'>IA</option>
          <option value='KS'>KS</option>
          <option value='KY'>KY</option>
          <option value='LA'>LA</option>
          <option value='ME'>ME</option>
          <option value='MD'>MD</option>
          <option value='MA'>MA</option>
          <option value='MI'>MI</option>
          <option value='MN'>MN</option>
          <option value='MS'>MS</option>
          <option value='MO'>MO</option>
          <option value='MT'>MT</option>
          <option value='NE'>NE</option>
          <option value='NV'>NV</option>
          <option value='NH'>NH</option>
          <option value='NJ'>NJ</option>
          <option value='NM'>NM</option>
          <option value='NY'>NY</option>
          <option value='NC'>NC</option>
          <option value='ND'>ND</option>
          <option value='OH'>OH</option>
          <option value='OK'>OK</option>
          <option value='OR'>OR</option>
          <option value='PA'>PA</option>
          <option value='RI'>RI</option>
          <option value='SC'>SC</option>
          <option value='SD'>SD</option>
          <option value='TN'>TN</option>
          <option value='TX'>TX</option>
          <option value='UT'>UT</option>
          <option value='VT'>VT</option>
          <option value='VA'>VA</option>
          <option value='WA'>WA</option>
          <option value='WV'>WV</option>
          <option value='WI'>WI</option>
          <option value='WY'>WY</option>
        </select>
        <div className='inline'>
          <p className='charLimit' id='cityCharLimit'>
            {charLimitCity - charCountCity} characters remaining.
          </p>
        </div>
        <div className='inline'>
          <p className='charLimit' id='zipcodeCharLimit'>
            {charLimitZipcode - charCountZipcode} characters remaining.
          </p>
        </div>
      </div>
      <Link to='/Profile'>
        <button onClick={handleSave}>Save Changes</button>
      </Link>
      <Link to='/Profile'>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default ClientProfileFormEdit;
