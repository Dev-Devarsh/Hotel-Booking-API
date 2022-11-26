
const mongooes = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

mongooes.connect(process.env.MONGO).then(() => {
  console.log('connection successful');
}).catch((err) =>{
  console.log(`Error connecting to MongoDB ${err}`);
});

mongooes.connection.on("disconnected",()=>{
  console.log('disconnected');
    
})