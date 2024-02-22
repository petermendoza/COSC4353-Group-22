import '../Style/Components/FuelQuoteForm.css';

import React from 'react';

const FuelQuoteForm = () => {
  const address = 'Main st 123';
  const unitPrice = 200.83;
  const total = 3213.23;

  return (
    <div className='quote-form'>
      <h2>Price Quote Form</h2>

      <div className='form-row'>
        
        <p>Ship to:</p>
        
        <div className = "input-box">
          <input type = "shippingAddress" placeholder = 'Shipping Address' required />
        </div>
      
      </div>

      <div className='form-row'>
        
        <div className = 'dataBox'>
          <p>Ship by: </p>
          <input className='input-date' type='date' value='2024-07-22' />
        </div>
      
        <div className = 'dataBox'>
          <p>Quantity: </p>
          <input className='input-qty' required type='number'></input>
        </div>

      </div>
      
      <hr />

      <div className='form-row'>

        <div className = 'dataBox'>
          <p>Unit Price($): </p>
          <p className = 'infoDisplay'>{unitPrice}</p>
        </div>
        
        <div className = 'dataBox'>
          <p>Total: </p>
          <p className = 'infoDisplay'>${total}</p>
        </div>

      </div>

      <div className = 'submit-row'>
        <button type = "submit">Submit</button>
      </div>

    </div>
  );
};

export default FuelQuoteForm;
