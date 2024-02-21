import '../Style/Components/FuelQuoteForm.css';

import React from 'react';

const FuelQuoteForm = () => {
  const address = 'Main st 123';
  const unitPrice = 200.83;
  const total = 3213.23;

  return (
    <div className='quote-form'>
      <h2>Price Quote</h2>

      <div className='form-row'>
        <p>Ship to:</p>
        <p>{address}</p>
      </div>

      <div className='form-row'>
        <p>Ship by: </p>
        <input className='input-date' type='date' value='2024-07-22' />
      </div>
      <br />

      <div className='form-estimate'>
        <p>Qty</p>
        <p>Unit Price($)</p>
        <p>Total</p>
        <input className='input-qty' type='number'></input>
        <p>{unitPrice}</p>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default FuelQuoteForm;
