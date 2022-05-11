const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    
    movieName:{
        type:String,
        required:true,
    },
    
    timeSlot:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    banner:{
        type:String,
        required:false,
    },

    cast:{
        type:String,
        required:true,
    },
 
});

const Movie = mongoose.model("movie",movieSchema);
module.exports = Movie;
