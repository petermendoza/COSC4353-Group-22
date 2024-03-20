const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    res.status(200).json({message: "Get all profiles"});
});

router.route("/").post((req,res) => {
    res.status(200).json({message: "Create profile"});
});

router.route("/:id").get((req,res) => {
    res.status(200).json({message: `Get profile for ${req.params.id}`});
});

router.route("/:id").put((req,res) => {
    res.status(200).json({message: `Update profile for ${req.params.id}`});
});

router.route("/:id").delete((req,res) => {
    res.status(200).json({message: `Delete profile for ${req.params.id}`});
});


module.exports = router;