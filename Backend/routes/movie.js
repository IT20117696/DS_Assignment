const express = require ('express');
const movie = require ('../models/movie');
const router = express.Router();

//Add new movies
router.route('/movie/add').post((req,res)=>{
    let newMovie = new movie(req.body);
    newMovie.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "Movies Add Successfully!!!"
        });
    });
});

//display movie details 
router.route('/movie/display').get((req,res)=>{
    movie.find().exec((err,movie)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMovie : movie
        });
    });
});

module.exports = router;