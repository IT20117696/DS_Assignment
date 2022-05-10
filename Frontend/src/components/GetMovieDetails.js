import React, { Component } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import VideoCallIcon from '@mui/icons-material/VideoCall';

export default class GetMovieDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie :[]
        };
    }

// onReadirect(id){
//     // window.location.href = `/movieadd`
// }

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
          <br/>
          <div align="right">
          <br/>
          <IconButton aria-label="delete" size="small"
                      style={{background: "#800000"}} href={`/movie/add`}>
          <VideoCallIcon fontSize="large"  style={{color: "white"}}/>
          </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
          <a><b>ADD MOVIES</b></a>

          <br/><br/><br/>
          </div>
          <table class = "table">
              <thead>
                  <tr>
                      <th scope='col'>No</th>
                      <th scope='col'>Movie Name</th>
                      <th scope='col'>Show Time</th>
                      <th scope='col'>Description</th>
                      <th scope='col'>Cast</th>
                      <th scope='col'>&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
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
                            
                          <IconButton aria-label="edit" color="primary" size="small"
                            style={{background: "#FBB917"}}
                            href={`/edit/${movie._id}`}>
                            <EditIcon fontSize="small"  style={{color: "black"}} />
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
