const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    // Fill out fields you want in schema
    name: {
        type: String,
        // Required flag true, if it doesn't meet requirement then give message
        required: [true, "Please add the name"]
    },
    address1: {
        type: String,
        required: [true, "Please add address1"]
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: [true, "Please add the city"]
    },
    zipcode: {
        type: Number,
        required: [true, "Please add the zipcode"]
    },
    state: {
        type: String,
        required: [true, "Please add the name"]
    },
}, {
    // Add timestamps to when you add
    timestamps: true,
});

// Export model as module,
module.exports = mongoose.model("Profile", profileSchema)