import './FuelQuoteHistory.css';

import { useState } from "react";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const historyData = [
    {
        clientID: 202020,
        quoteID: 123456,
        dateRequested: 'Feburary 19, 2024',
        gallonsRequested: 100,
        deliveryAddress: 'Address of Delivery',
        deliveryDate: 'March 20, 2024',
        suggestedPrice: 20.24,
        totalAmountDue: 1000.99
    },
    {
        clientID: 101010,
        quoteID: 111111,
        dateRequested: 'Feburary 7, 2024',
        gallonsRequested: 50,
        deliveryAddress: 'Address of Delivery',
        deliveryDate: 'May 20, 2024',
        suggestedPrice: 30.68,
        totalAmountDue: 2984.99 
    },
    {
        clientID: 303030,
        quoteID: 333333,
        dateRequested: 'March 7, 2024',
        gallonsRequested: 50,
        deliveryAddress: 'Address of Delivery',
        deliveryDate: 'August 20, 2024',
        suggestedPrice: 30.68,
        totalAmountDue: 2984.99 
    }
]

const FuelQuoteHistory = () => {

    const [selected,setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className = "wrapper">
            
            <div className = "accordian">

                {historyData.map((quote, i) => (
                    
                    <div className = "quote">

                        <div className = "header" onClick = {() => toggle(i)}>
                           
                            <div className = "quoteIDBox">
                                <p className = "label">Quote ID: </p>
                                <p className = "dataDisplay"> {quote.quoteID}</p>
                            </div>
                            
                            <div className = 'totalPrice'>
                                <p className = "label">Total: </p>
                                <p className = "dataDisplay">${quote.totalAmountDue}</p>
                                <span>{selected === i ? <FaAngleUp /> : <FaAngleDown />}</span>
                            
                            </div>
                        </div>

                        <div className = {selected === i ? 'content show' : 'content'}>

                            <div className = 'row'>
                                <div className = 'dataBox'>
                                    <p className = 'label'>Request Date:</p>
                                    <p className = "dataDisplay">{quote.dateRequested}</p>
                                </div>
                            </div>

                            <div className = 'row'>
                                <div className = 'dataBox'>
                                    <p className = 'label'>Delivery Date:</p>
                                    <p className = "dataDisplay">{quote.deliveryDate}</p>
                                </div>
                            </div>

                            <div className = 'row'>
                                <div className = 'dataBox'>
                                    <p className = 'label'>Delivery Address:</p>
                                    <p className = "dataDisplay">{quote.deliveryAddress}</p>
                                </div>
                            </div>

                            <div className = 'row'>
                                <div className = 'dataBox'>
                                    <p className = 'label'>Gallons Requested:</p>
                                    <p className = "dataDisplay">{quote.gallonsRequested} gallons</p>
                                </div>
                            </div>

                            <div className = 'row'>
                                <div className = 'dataBox'>
                                    <p className = 'label'> Price per Gallon:</p>
                                    <p className = "dataDisplay">${quote.suggestedPrice}</p>
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