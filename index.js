import express, { json } from "express";
import { config } from "dotenv";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import roomsRoute from "./routes/rooms.js";
import userRoute from "./routes/user.js";
import "./dbConfig.js";
config()


const app = express();
app.use(json());
app.use("/api/auth" , authRoute); // always use '/' before routes
app.use("/api/user" , userRoute);
app.use("/api/hotel" , hotelRoute);
app.use("/api/rooms" , roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
app.listen(4500)

