require("dotenv").config()
//async-errors



const express = require("express");
const app = express();
const connect = require("./db/connect");

const notFoundMiddleware = require("./middleware/not_found");
const errorMiddleware = require("./middleware/error_handler");
const connectDB = require("./db/connect");

//middleware
app.use(express.json());

//routes

app.get("/", (req,res)=>{
    res.send("<h1>Store_API</h1><a href='/api/v2/products'> Product Routes </a>");
})

//products route




app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async() =>{
    try{
        //connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening port ${port}`));
    }
    catch(err){
        console.log(err);
    }
}
start();
