const mongoose = require('mongoose');

const bookmovieSchema = new mongoose.Schema({
    theater:{
        type:String,
        required:true,
    },

    timeSlot:{
        type:String,
        required:true,
    },

    bookingDate:{
        type:String,
        required:true,
    },

    noOfTickects:{
        type:String,
        required:true,
    },

    amount:{
        type:String,
        required:true,
    },

})

const BookMovie = mongoose.model("Book Movie",bookmovieSchema);
module.exports = BookMovie;
