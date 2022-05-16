const express = require ('express');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express ();
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(express.json());


const PORT = process.env.PORT || 8070;

app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:100000000
}));

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
const adminRouter = require("./routes/admin");
const movieRouter = require("./routes/movie");
const bookMovieRouter = require("./routes/bookMovie");
const addCardDetailsRouter = require('./routes/addCardDetails');
const paymentRouter = require('./routes/paymentConfirmation');

//use routes
app.use('/api',customerRouter);
app.use('/api',adminRouter);
app.use('/api',movieRouter);
app.use('/api',bookMovieRouter);
app.use('/api',addCardDetailsRouter);
app.use('/api',paymentRouter)

app.listen(PORT,()=>{
    console.log(`App is running on on port number: ${PORT}`)
});