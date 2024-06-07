const mongoose = require("mongoose");

//if connected to DB then only server will run
const connectDB = (url)=>{
    return mongoose.connect(url)
}

module.exports = connectDB;