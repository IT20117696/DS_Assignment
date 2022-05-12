const express = require ('express');
const bookmovie = require('../models/bookMovie');
const Movie = require ('../models/movie');
const { route } = require('./customer');
const router = express.Router();

//Book Movies (add)
router.route('/bookMovie/add').post((req,res)=>{
    let newBookMovie = new bookmovie(req.body);
    newBookMovie.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }return res
        .status(201)
        .send({ status: "Movie Booked", bookmovie: newBookMovie
        });
    });

});
router.get("/bookMovie/add/:id",async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        if(!movie)
        {
            throw new Error ("no movie")
        }
        // console.log(movie)
      res
        .status(201)
        .send({ status: "Movie retrived", movie: movie
      });
    } catch (error) {
      res
        .status(500)
        .send({ status: "Error", error: error.message });
    }
  });
   router.get("/carddetails/display/:id",async(req,res)=>{
   const id = req.params.id;
      if(id){
        bookmovie.findById(id).exec((err,bookmovie)=>{
          if(err){
            return res.status(400).json({
              error:err
            })
          }return res.status(200).json({
            success: true,
            selectedBookmovie:bookmovie
          })
          
        })
      } else{
        return res.status(400).json({
          error:"Data Fetch Error !!"
        }
         )}

   })

module.exports = router;
