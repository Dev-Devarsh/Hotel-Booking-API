import express from "express";
const router = express.Router();

// Add routes
router.get("/", (req,res)=>{
    res.send('rooms');
});
router.get("/rooms", (req,res)=>{
    res.send('register');
});

export default router;
