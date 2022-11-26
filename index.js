const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js")
// const hotelRoute = require("./routes/hotel.js")
// const roomsRoute = require("./routes/rooms.js")
// const userRoute = require("./routes/users.js")
require("./dbConfig");
dotenv.config()


const app = express();
// app.use('api/auth' , authRoute)
// app.use('api/user' , userRoute)
// app.use('api/hotel' , hotelRoute)
// app.use('api/rooms' , roomsRoute)
app.get('/',(req,res)=>{
    res.send('aefaefaef');
})
app.listen(4500)

