const express = require("express");

const routes = express.Router();

// Add routes
routes.get('/', (req,res)=>{
    res.render('km');
});

module.exports = routes;
