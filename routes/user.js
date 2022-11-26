const express = require("express");

const router = express.Router();

// Add routes
router.get('/', (req,res)=>{
    res.send('km');
});
router.get('/user', (req,res)=>{
    res.send('register');
});

module.exports = router;
