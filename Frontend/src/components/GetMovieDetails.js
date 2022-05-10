import React, { Component } from 'react';
import axios from 'axios';

export default class GetMovieDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie :[]
        };
    }
componentDidMount(){
    this.retrieveMovie();
}    

retrieveMovie(){
    axios.get("http://localhost:8070/api/movie/display").then(res=>{
        if(res.data.success){
            this.setState({
                movie:res.data.existingMovie
            });
            console.log(this.state.movie);
        }
    })
}
 
    render() {
    return (
      <div>
        {this.state.movie.map(movie=>(
            <div>
                <p>{movie.movieName}</p>
                <p>{movie.timeSlot}</p>
                <p>{movie.description}</p>
                <p>{movie.banner}</p>
                <p>{movie.cast}</p>
            </div>
        ))}
      </div>
    )
  }
}
