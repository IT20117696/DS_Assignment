import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainHomePageNavBar from './MainHomePageLayOut/MainHomePageNavBar';
import Footer from './footer';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import CircularProgress from '@material-ui/core/CircularProgress';


function MovieHomePage() {
    const[Sources, setSources] = useState([])
    const [isLoading, setLoading] = useState(true)

    const shiftLeft = () =>{
        const newOrder = []

        Sources.forEach((src, index) =>{
            const newIndex = --index < 0 ? Sources.length -1 : index
            newOrder[newIndex] = src
          })
      
          setSources(newOrder)
      
        }
        const shiftRight = () =>{
        const newOrder = []
          
            Sources.forEach((src, index) =>{
              const newIndex = ++index >= Sources.length ? 0 : index
              newOrder[newIndex] = src
                
            })
        
            setSources(newOrder)
        }
        useEffect(() => {
            setLoading(true)
            const getMovies = async () => {
               try {
                await axios.get(`http://localhost:8070/api/movie/display`)
                .then((res) => {
                  setSources(res.data.existingMovie)
                  setLoading(false)
                })
                .catch((err) => {
                  console.log(err)
                })
             } catch (error) {
                console.log(error.message)
             }
          }
          
          getMovies()
       }, [])
 
       if (isLoading) {
        return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
           <CircularProgress />
        </div>
      }
      return (
        <div>
           <MainHomePageNavBar/>
       
        <div className="">
      
        <div className="Carousel" >
          
          
          <div className="container">
          <div>
          <FaArrowCircleLeft class="left-arrow" onClick={shiftLeft} size="32"/>
          </div>
          
          
          {Sources.map((src, index) =>
              <div  key={index}>
                <img id={'pic' + index} src={src.banner}
                alt="img" style={{width:'450px'}} />
                
              </div>
              
          )}
          
          <div>&nbsp;
            <FaArrowCircleRight class="right-arrow" onClick={shiftRight} size="32"/>
          </div>

            
       </div>
       </div>
       </div>
       <Footer/>
       </div>  
      
  )
}

export default MovieHomePage;