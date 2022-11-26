const express = require("express");
const hotelSchemas = require("../models/hotelSchema.js");

const router = express.Router();

// Add router
router.post('/', async (req, res) => {
    const newHotel = await new hotelSchemas(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
});

module.exports = router;
