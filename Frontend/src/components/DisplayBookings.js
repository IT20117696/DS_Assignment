import React, { Component } from 'react';
import axios from 'axios';
import MovieMainNavBar from './DashBoardLayOut/MovieMainNavBar';

export default class DisplayBookings extends Component {
  constructor(props){
    super(props);
    this.state = {
        bookmovie :[]
    };
}

//retrieve all movie details
componentDidMount(){
  this.retrieveMovie();
}   

retrieveMovie(){
  axios.get("http://localhost:8070/api/bookmovie/display").then(res=>{
      if(res.data.success){
          this.setState({
            bookmovie:res.data.existingBookMovie
          });
          console.log(this.state.bookmovie);
      }
  })
}

  render() {
    return (
      <div>
         <MovieMainNavBar/>
         <div className='container'>
         <br/>
         <table class = "table" >
              <thead>
                  <tr bgcolor="#BCC6CC">
                      <th scope='col'>No</th>
                      <th scope='col'>Movie Name</th>
                      <th scope='col'>Theater</th>
                      <th scope='col'>Show Time</th>
                      <th scope='col'>Booking Date</th>
                      <th scope='col'>No of Ticket</th>
                      <th scope='col'>Amount</th>
                  </tr>
              </thead>
              <tbody>
                     {this.state.bookmovie.map((bookmovie,index)=>(
                      <tr>
                          <th scope='row'>{index + 1}</th>
                          <td>{bookmovie.movieName}</td>
                          <td>{bookmovie.theater}</td>
                          <td>{bookmovie.timeSlot}</td>
                          <td>{bookmovie.bookingDate}</td>
                          <td>{bookmovie.noOfTickects}</td>
                          <td>{bookmovie.amount}</td>
                          </tr>
        ))}
          </tbody>
        </table>

         </div>
      </div>
    )
  }
}
