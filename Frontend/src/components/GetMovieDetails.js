import React, { Component } from 'react';
import axios from 'axios';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default class GetMovieDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie :[]
        };
    }

onReadirect(id){
    window.location.href = `/movieadd`
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
      <div className='container'>
          <table class = "table">
              <thead>
                  <tr>
                      <th scope='col'>No</th>
                      <th scope='col'>Movie Name</th>
                      <th scope='col'>Show Time</th>
                      <th scope='col'>Description</th>
                      <th scope='col'>Cast</th>
                      <th scope='col'>Action</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.movie.map((movie,index)=>(
                      <tr>
                          <th scope='row'>{index + 1}</th>
                          <td><a href={`/specificmovie/${movie._id}`} style ={{textDecoration:'none'}}> {movie.movieName}</a></td>
                          <td>{movie.timeSlot}</td>
                          <td>{movie.description}</td>
                          <td>{movie.cast}</td>
                          <td>
                          <IconButton aria-label='btn btn-success' size="small"
                             style={{background: "#FBB917"}}
                                onClick={()=>this.onReadirect(movie._id)} >
                             <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                          </IconButton> 
                             &nbsp;&nbsp;&nbsp;&nbsp;
                            
                          <IconButton aria-label="delete" size="small"
                              style={{background: "#800000"}} >
                             <DeleteForeverIcon fontSize="small"  style={{color: "white"}}/>
                          </IconButton>
                          </td>
                          </tr>
        ))}
          </tbody>
        </table>
      </div>
    )
  }
}
