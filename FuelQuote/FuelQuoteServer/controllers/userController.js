const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}



// signup user
const signupUser = async (req, res) => {
    res.json({mssg: 'signupUser'})
}



module.exports = { signupUser, loginUser }