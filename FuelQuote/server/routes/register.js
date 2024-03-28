const express = require('express')
const Login = require('../models/registerModel')
const router = express.Router()


//get person from provided credentials 
router.post('/', (req, res) => {
    
    // Reads input from front end form
    const { username, password } = req.body; 

    // Dummy data to validate form data with
    const dummy = {
        "username": "test",
        "password": "test"
    }

    // Validation
    const user = (username === dummy.username && password === dummy.password)
    if (!username || !password) {
        return res.status(400).json({ message: "Please provide username, and password." });
    }
     // Check if user already exists
     if (user) {
        return res.status(400).json({ message: "User already exists." });
    }

    return res.status(201).json({ message: "User registered successfully." });

   
});

module.exports = router