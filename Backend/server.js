const express = require ('express');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express ();
require("dotenv").config();
app.use(express.json());


const PORT = process.env.PORT || 8071;

app.use(cors());

//mongodb connection
const URL = process.env.MONGODB_URL;
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';

mongoose.connect(URL,{
    // useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongodb connection success!!!");

});

//import routes
const customerRouter = require("./routes/customer");


//use routes
app.use('/api',customerRouter);

app.listen(PORT,()=>{
    console.log(`App is running on on port number: ${PORT}`)
});