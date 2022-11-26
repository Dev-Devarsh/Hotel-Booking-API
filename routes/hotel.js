const express = require("express");
const hotelSchemas = require("../models/hotelSchema");

const routes = express.Router();

// Add routes
routes.post('/', async (req, res) => {
    const newHotel = await new hotelSchemas(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {

    }
});

module.exports = routes;
