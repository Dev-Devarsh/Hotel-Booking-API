import { Router } from "express";
import hotel from "../models/hotelSchema.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const newHotel = new hotel(req.body)
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        const saveHotel = await updateHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
        log(error)
    }
})

export default router;
