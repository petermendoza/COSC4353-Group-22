const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "name": "Anita M. Wynn",
        "address1": "Main st 123",
        "address2":"N/A",
        "city":"Houston",
        "zipcode":77204,
        "state":"TX"
    });
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