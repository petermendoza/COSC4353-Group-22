const asyncHandler = require("express-async-handler");
const Profile = require("../models/profileModel")


const getProfile = asyncHandler(async(req,res) => {
    // Gets the user's profile
    const profile = await Profile.findById(req.params.id);
    if(!profile){
        res.status(404);
        throw new Error("Profile not found");
    }
    res.status(200).json(profile);
});