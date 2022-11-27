import express from "express";
const router = express.Router();
import hotel from "../models/hotelSchema.js";

// POST
router.post("/", async (req, res, next) => {
    try {
        let newHotel = new hotel(req.body)
        let saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        // res.status(500).json(error)
        // console.log(error);

        // we are gonna handle error by using Next and this error will be handle by error handler in Index.js
        next(error);
    }
});

//UPDATE
router.put("/:id", async (req, res, next) => {
    try {
        let updateHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        let saveHotel = await updateHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        // res.status(500).json(error)
        // console.log(error);

        // we are gonna handle error by using Next and this error will be handle by error handler in Index.js
        next(error);
    }
});

//DELETE
router.delete("/:id", async (req, res, next) => {
    /// How to set custom errors
    // const failed = true;
    // const err = new Error(); // make new Error class instance
    // err.status = 404;
    // err.message = "Sorry hotel can not found!"
    try {
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel deleted')
    } catch (error) {
        // res.status(500).json(error)
        // console.log(error);

        // we are gonna handle error by using Next and this error will be handle by error handler in Index.js
        next(error);
    }
});

//GET
router.get("/", async (req, res, next) => {
    console.log('get');
    // next();
    try {
        let hotel = await hotel.findById('asyafsuyf')
        res.status(200).json(hotel)
    } catch (error) {
        // res.status(500).json(error)
        // console.log(error);

        // we are gonna handle error by using Next and this error will be handle by error handler in Index.js
        next(error);
    }
});

//GET ALL
router.delete("/:id", async (req, res, next) => {
    try {
        let hotels = await hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        // res.status(500).json(error)
        // console.log(error);

        // we are gonna handle error by using Next and this error will be handle by error handler in Index.js
        next(error);
    }
});



export default router;
