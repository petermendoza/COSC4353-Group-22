const express = require('express')

const router = express.Router()

// Get all Fuel Quotes
router.get('/', (req, res) => {
    res.json([{
        "clientID": 202020,
        "quoteID": 123456,
        "dateRequested": "Feburary 19, 2024",
        "gallonsRequested": 100,
        "deliveryAddress": "Address of Delivery",
        "deliveryDate": "March 20, 2024",
        "suggestedPrice": 20.24,
        "totalAmountDue": 1000.99
    },
    {
        "clientID": 101010,
        "quoteID": 111111,
        "dateRequested": "Feburary 7, 2024",
        "gallonsRequested": 50,
        "deliveryAddress": "Address of Delivery",
        "deliveryDate": "May 20, 2024",
        "suggestedPrice": 30.68,
        "totalAmountDue": 2984.99 
    }
    ]);
})

// Post new Fuel Quote
router.post('/', (req, res) => {
    res.json({ msg: 'Post new Fuel Quote'});
})

module.exports = router