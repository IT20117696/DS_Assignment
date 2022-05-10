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

//get a specific movie details details 
router.route('/display/:id').get((req,res)=>{
    let movieID = req.params.id;
    movie.findById(movieID,(err,movie)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            });
        }
        return res.status(200).json({
            success:true,
            movie,
        })
    });
});

//update movie details 
router.route('/update/:movieID').put((req,res)=>{
    movie.findByIdAndUpdate(
        req.params.movieID,{
            $set:req.body
        },
        (err,movie)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }return res.status(200).json({
                success: "Movie details Update Successfully!!"
            });
        }
    )
});

//delete movie
router.route('/delete/:movieID').delete((req,res)=>{
    movie.findByIdAndRemove(req.params.movieID).exec((err,deletemovie)=>{
     if(err)
       return res.status(400).json({
           message: "Dalete UnSuccessfull !!" ,err
       });
       return res.json({
           message : "Delete Successfull !!",deletemovie
       });
    });
});

module.exports = router;