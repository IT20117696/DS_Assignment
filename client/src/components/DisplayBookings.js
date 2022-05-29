import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './DashBoardLayOut/AdminNavBar';
import Button from "@material-ui/core/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

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

//Search 
filterData(bookmovie,searchKey){
  const result = bookmovie.filter((bookmovie)=>
  bookmovie.movieName.toLowerCase().includes(searchKey)||
  bookmovie.theater.toLowerCase().includes(searchKey)||
  bookmovie.bookingDate.toLowerCase().includes(searchKey)  )

   this.setState({bookmovie:result})
}

handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/api/bookmovie/display").then(res=>{
      if(res.data.success){
      this.filterData(res.data.existingBookMovie,searchKey)
    }
  });
}

  render() {
    return (
      <div>
         <AdminNavBar/>
         <div className='container'>
            <br/><br/>

          <div className="col-md-3" >
            <input type="text" className="form-control" style={{marginBottom:'2px'}} onChange={this.handleSearchArea} />
               </div><br/>
               <h3 align="center"><b><u>All Movie Booking Details</u></b></h3>
                               <br></br>
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
                      <th scope='col'>Send Message</th>
                      <th scope='col'>Send Email</th>
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
                          <td> 
               <Button
                  href='/SmsSend'
                  style={{ color:"white", background:"#08368b" }}
                  variant="outlined"
                  startIcon={<CheckCircleIcon />}
                >
                 Send SMS
              </Button>      
               
                            </td>
                            <td><Button
                  href='/EmailSend'
                  style={{ color:"black", background:"#F58200" }}
                  variant="outlined"
                  startIcon={<MarkEmailReadIcon />}
                >
                 Send Email
              </Button>     </td>
                          </tr>
        ))}
          </tbody>
        </table>

         </div>
      </div>
   
    )
  }
}
