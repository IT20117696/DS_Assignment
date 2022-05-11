const express = require ('express');
const bookmovie = require('../models/bookMovie');
const router = express.Router();

//Book Movies (add)
router.route('/bookMovie/add').post((req,res)=>{
    let newBookMovie = new bookmovie(req.body);
    newBookMovie.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }return res.status(200).json({
            success : "Movie Booking Successfully !!"
        });
    });
});

module.exports = router;
