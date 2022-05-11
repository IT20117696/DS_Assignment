import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginat from './paginationComponent';
import Movie from './MainMoviePage';

const MovieDisplay = () => {
    const [isLoading, setLoading] = useState(true)
    const [movie, setmovie] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)
 
    useEffect(() => {
        setLoading(true)
        const getMovies = async()=>{
            try{
                await axios.get(`http://localhost:8070/api/movie/display`)
                .then((res) => {
                    setmovie(res.data.existingMovie)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error.message)
                })
            } catch (error) {
                console.log(error.message)
        }
      }  
      getMovies()
   },[])
   
   const indexOfLastPost = currentPage * postPerPage
   const indexOfFirstPost = indexOfLastPost - postPerPage
   const currentPost = movie.slice(indexOfFirstPost, indexOfLastPost)
    
    let paginate = (pageNumber) => {
    return setCurrentPage(pageNumber)
 }
 return(
    <div style={{ backgroundColor:"#0C090A" ,height:"1000px"}} >
    <div className="container" align="center">
     <br/><br/>
     <div className="row" style={{ paddingTop: 15 }}>
     {currentPost.map((movie) => (
     <div key={movie._id} className="col-lg-3 col-md-6">
       <div className="ui link cards">
         <Movie
           key={movie._id}
           movieID={movie._id}
           movieName={movie.movieName}
           banner={movie.banner}
           cast={movie.cast}
         />
     </div>
     </div>
     ))}
   </div>
   <br/>
   <div className="d-flex justify-content-center customPagination" >
   <Paginat
       postPerPage={postPerPage}
       totalPosts={movie.length}
       paginate={paginate}/>
   </div>
 </div>
</div>
 )
}

export default MovieDisplay;