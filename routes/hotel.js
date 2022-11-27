import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../controllers/hotel_controller.js";
const router = express.Router();

// POST
router.post("/", createHotel);

//UPDATE
router.put("/:id",updateHotel);

//DELETE
router.delete("/:id",deleteHotel);

//GET
router.get("/:id",getHotelById);

//GET ALL
router.get("/",getAllHotels);



export default router;
