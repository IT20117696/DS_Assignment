import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

export default class SpecificMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie :{}
   };
  }

  componentDidMount(){
    const movieID = this.props.match.params.movieID;
     axios.get(`http://localhost:8070/api/specific/${movieID}`).then((res)=>{
      if(res.data.success){
        this.setState({
          movie:res.data.movie
        });
        console.log(this.state.movie);
      }
     })
  }

  render() {
    const {movieName,timeSlot,description,banner,cast} = this.state.movie;
    
    return (
             <div align="center" >
             <Paper style={{textAlign:"center",borderRadius: 5}}>
             <img className="activator"  id="aimage" src={banner} />
             <br/>
             <div
                style={{
                  fontSize: 50,
                  color: "gray",
                  fontFamily: 'Arial Black'
                }}
              >
                {movieName}
              </div>

              <table style={{ fontSize: 25 }} align="center">
              <tbody>
              <tr>
              <td>Show Time</td>
              <td style={{ paddingLeft: 18 }}>: {timeSlot}</td>
              </tr>
              <tr>
              <td>Description</td>
              <td style={{ paddingLeft: 18 }}>: {description}</td>
              </tr>
              <tr>
              <td>Movie Cast</td>
              <td style={{ paddingLeft: 18 }}>: {cast}</td>
              </tr>
              </tbody>
              </table>
              </Paper>
              </div>
          
    )
  }
}
