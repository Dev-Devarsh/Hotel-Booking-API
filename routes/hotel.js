import express from "express";
const router = express.Router();
import hotel from "../models/hotelSchema.js";

// POST
router.post("/", async (req, res) => {
    try {
        let newHotel = new hotel(req.body)
        let saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        let updateHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        let saveHotel = await updateHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel deleted')
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
});

//GET
router.get("/:id", async (req, res,next) => {
    console.log('get');
    // next();
    try {
        await hotel.findById(req.params.id)
        res.status(200).json('Hotel deleted')
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
});

//GET ALL
router.delete("/:id", async (req, res) => {
    try {
        let hotels = await hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
});

//

export default router;
