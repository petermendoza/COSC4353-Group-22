const mongoose = require('mongoose')

const Schema = mongoose.Schema

//do: complete User schema
const fuelQuoteSchema = new Schema({
    clientID: Number,
    quoteID: Number,
    dateRequested: String,
    gallonsRequested: Number,
    deliveryAddress: String,
    deliveryDate: String,
    suggestedPrice: Number,
    totalAmountDue: Number
})

module.exports = mongoose.model('FuelQuote', fuelQuoteSchema)