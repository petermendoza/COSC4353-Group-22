const express = require('express')
const Login = require('../models/loginModel')
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
    
    if(user){
       res.json({message: "Login successful"});
    }
    else{
        res.json({message: "Invalid username or password"});
    }
   
});

module.exports = router