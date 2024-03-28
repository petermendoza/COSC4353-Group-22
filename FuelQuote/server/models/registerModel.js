const mongoose = require('mongoose')

const Schema = mongoose.Schema


const RegisterSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    username:{
        type: String, 
        required:true
    },
    password:{
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Register', RegisterSchema)