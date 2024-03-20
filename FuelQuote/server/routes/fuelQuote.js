const express = require('express')

const router = express.Router()

// Get all Fuel Quotes
router.get('/', (req, res) => {
    res.json({ msg: 'Get all Fuel Quotes'});
})

// Post new Fuel Quote
router.post('/', (req, res) => {
    res.json({ msg: 'Post new Fuel Quote'});
})

module.exports = router