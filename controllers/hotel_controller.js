import hotel from "../models/hotelSchema.js";
import { createError } from "../utils/error.js";


export const createHotel = async (req, res, next) => {
    try {
        let newHotel = new hotel(req.body)
        let saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        /// Custom error
        next(createError(401,'You are not authenicated')) 

        /// we are gonna handle error by using Next and this error will be handle by error handler in Index.js
        next(error);
    }
}
export const updateHotel = async (req, res, next) => {
    try {
        let updateHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        let saveHotel = await updateHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        next(error);
    }
}
export const deleteHotel = async (req, res, next) => {
    /// How to set custom errors
    // const failed = true;
    // const err = new Error(); // make new Error class instance
    // err.status = 404;
    // err.message = "Sorry hotel can not found!"
    try {
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel deleted')
    } catch (error) {
        next(error);
    }
}
export const getHotelById = async (req, res, next) => {
    try {
        let hotel = await hotel.findById('asyafsuyf')
        res.status(200).json(hotel)
    } catch (error) {
        next(error);
    }
}
export const getAllHotels = async (req, res, next) => {
    try {
        let hotels = await hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        next(error);
    }
}