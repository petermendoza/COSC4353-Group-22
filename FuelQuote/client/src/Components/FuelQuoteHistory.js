import '../Style/Components/FuelQuoteHistory.css';

import { useState, useEffect } from 'react';
import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FuelQuoteHistory = () => {
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(null);

  // Toggle to display information for selected Fuel Quote
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  // Fetch to get Fuel Quote data from API call
  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch('/api/FuelQuote');
      const json = await response.json();

      if (response.ok) {
        setHistory(json);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className='historywrapper'>
      <div className='accordian'>
        {history.map((quote, i) => (
          <div className='quote'>
            <div className='header' onClick={() => toggle(i)}>
              <div className='quoteIDBox'>
                <p className='label'>Quote ID: </p>
                <p className='dataDisplay'> {quote.quoteID}</p>
              </div>

              <div className='totalPrice'>
                <p className='label'>Total: </p>
                <p className='dataDisplay'>${quote.totalAmountDue}</p>
                <span>{selected === i ? <FaAngleUp /> : <FaAngleDown />}</span>
              </div>
            </div>

            <div className={selected === i ? 'content show' : 'content'}>
              <div className='row'>
                <div className='dataBox'>
                  <p className='label'>Request Date:</p>
                  <p className='dataDisplay'>{quote.dateRequested}</p>
                </div>
              </div>

              <div className='row'>
                <div className='dataBox'>
                  <p className='label'>Delivery Date:</p>
                  <p className='dataDisplay'>{quote.deliveryDate}</p>
                </div>
              </div>

              <div className='row'>
                <div className='dataBox'>
                  <p className='label'>Delivery Address:</p>
                  <p className='dataDisplay'>{quote.deliveryAddress}</p>
                </div>
              </div>

              <div className='row'>
                <div className='dataBox'>
                  <p className='label'>Gallons Requested:</p>
                  <p className='dataDisplay'>
                    {quote.gallonsRequested} gallons
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='dataBox'>
                  <p className='label'> Price per Gallon:</p>
                  <p className='dataDisplay'>${quote.suggestedPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuelQuoteHistory;
