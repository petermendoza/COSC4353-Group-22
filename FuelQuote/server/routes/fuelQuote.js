const express = require('express')

const router = express.Router()

// Get all Fuel Quotes
router.get('/', (req, res) => {
    res.json({ mssg: 'Get all Fuel Quotes'})
})

// Post new Fuel Quote
router.post('/', (req, res) => {
    res.json({ mssg: 'Post new Fuel Quote'})
})

module.exports = router