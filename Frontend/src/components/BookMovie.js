import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import CancelIcon from '@mui/icons-material/Cancel';

export default class BookMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            theater:"",
            timeSlot:"",
            bookingDate:"",
            noOfTickects:"",
            // totalAmount:"",
   }
}
handleInputChange = (e)=>{
    const{name,value} = e.target;
    this.setState({
      ...this.state,
      [name]:value
    });
  } 
  onSubmit = (e)=>{
    e.preventDefault();
    const{theater,timeSlot,bookingDate,noOfTickects} = this.state;
    const data = {
        theater:theater,
        timeSlot:timeSlot,
        bookingDate:bookingDate,
        noOfTickects:noOfTickects,
        // totalAmount:totalAmount
    }
    console.log(data);
    axios.post("http://localhost:8070/api/bookMovie/add",data).then((res)=>{
        if(res.data.success){
            window.location.href = '/';
            this.setState({
            theater:"",
            timeSlot:"",
            bookingDate:"",
            noOfTickects:"",
            // totalAmount:"",
          });
        }
      });
    }
    
    render() {
    return (
      <div align="center">
         <br/> <br/>
         <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
           <div className="card-header py-3">
            <div class="card-header" style={{background: "#E3E4FA"}}><h2>Cart Details</h2></div>
              <br/> 

          <form className="row g-3" > 
          
          <div className="col-md-6">
            <div align="left">
             <label style={{marginBottom:'2px'}} className="form-label"  Required="required"><b> Theaters </b></label></div>
             <select className="form-control" name="theater"  value={this.state.theater}
              onChange={this.handleInputChange} maxLength ="1000" required >
                 <option value="">Select Thearter</option>
                 <option value="SkyLights 3D Cinema">SkyLights 3D Cinema</option>
                 <option value="Liberty By Scope Cinemas">Liberty By Scope Cinemas</option>    
                 <option value="Eros Cinema">Eros Cinema</option>
                 <option value="Majestic Cineplex">Majestic Cineplex</option>
                 <option value="Cine City">Cine City</option>
                 <option value="PVR Cinemas">PVR Cinemas</option>
                 <option value="Scope Cinemas - CCC">Scope Cinemas - CCC</option>
                 <option value="Ricky Cinema">Ricky Cinema</option>
                 <option value="Savoy Premiere (Roxy)">Savoy Premiere (Roxy)</option>
             </select>
            </div>
         
            <div className="col-md-6">
            <div align="left">
             <label style={{marginBottom:'5px'}} className="form-label"  Required="required"><b>Book Times</b> </label></div>
             <select className="form-control" name="timeSlot"  value={this.state.timeSlot}
              onChange={this.handleInputChange} maxLength ="1000" required >
                 <option value="">Select Show Times</option>
                 <option value="10.30 A.M - 1.00 P.M">10.30 A.M - 1.00 P.M</option>
                 <option value="2.00 P.M - 4.30 P.M">2.00 P.M - 4.30 P.M</option>    
                 <option value="5.00 P.M - 7.30 P.M">5.00 P.M - 7.30 P.M</option>
                 <option value="8.00 P.M - 10.30 P.M">8.00 P.M - 10.30 P.M</option>
             </select>
            </div>

            <div className="col-md-6">
            <div align="left">
            <label style={{marginBottom:'5px'}} className="form-label"  Required="required"><b>Book Date</b></label></div>
            <input type="date" className="form-control" name="bookingDate" placeholder="Select Booking Date" Required = "required"
              value={this.state.bookingDate}
              onChange={this.handleInputChange} />
            </div>
         
            <div className="col-md-6">
            <div align="left">
             <label style={{marginBottom:'5px'}} className="form-label"><b>No Of Tickects</b> </label></div>
             <input type="number" className="form-control" name="noOfTickects" placeholder="Enter No Of Tickets" Required = "required" 
              value={this.state.noOfTickects } 
              onChange={this.handleInputChange} /><br/>
            </div>
            
            <div align="right">
            <Button
                 onClick={this.onSubmit}
                  style={{ color:"white", background:"#08368b"}}
                  variant="outlined"
                  startIcon={<BookmarkAddedIcon />}
                >
                Book Movie
              </Button> &nbsp;&nbsp; &nbsp;&nbsp;
              <Button
                  href='/'
                  style={{ color:"white", background:"#08368b" }}
                  variant="outlined"
                  startIcon={<CancelIcon />}
                >
                 Cancel Booking
              </Button>  </div>            

               </form>
            </div>
           </div>
         </div>   
    )
  }
}
