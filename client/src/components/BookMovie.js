import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import CancelIcon from '@mui/icons-material/Cancel';
import MovieMainNavBar from './DashBoardLayOut/MovieMainNavBar';
import Footer from './footer';

export default class BookMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            movie:{},
            theater:"",
            timeSlot:"",
            bookingDate:"",
            noOfTickects:"",
            amount:"", 
            email:"",
            bookmovie:{}       
   }
}


componentDidMount(){
  const id = this.props.match.params.id;
   axios.get(`http://localhost:8070/api/bookMovie/add/${id}`).then((res)=>{
    if(res.data.status){
      this.setState({
        movie:res.data.movie
      });
    }
   })
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
    const{movieName,theater,timeSlot,bookingDate,noOfTickects,email} = this.state;
    const amount = 700 * this.state.noOfTickects;
    const data = {
        movieName: this.state.movie.movieName,
        theater:theater,
        timeSlot:timeSlot,
        bookingDate:bookingDate,
        noOfTickects:noOfTickects,
        amount:amount,
        email:email
    }
    console.log(data);
    if(data){
    axios.post("http://localhost:8070/api/bookMovie/add",data).then((res)=>{
      if(res.data.status){
      window.location=(`/carddetails/add/${res.data.bookmovie._id}`);
      
      }
    }); 
 } 
}
  render() {
      const {movieName} = this.state.movie ;
      const {bookmovie} = this.state.bookmovie;
    
    return (
      <div>
         <div style={{ backgroundColor:"#2B3856" ,height:"900px"}} >
           <MovieMainNavBar/>
             <div align="center"> <br/><br/><br/><br/><br/>
                <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
                  <div className="card-header mt-2">
                    <div class="card-header" style={{background: "#E3E4FA"}}><h2>BOOK MOVIE</h2></div><br/>

                    <form className="row g-3" > 
                <a style={{fontSize: 30, color: "#000080",fontFamily:'Monotype Corsiva'}}> <b><u>{movieName}</u></b></a>
             <div className="col-md-6" align="left">
          <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>  Theaters </span>
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
         
                     <div className="col-md-6" align="left">
                  <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Book Times</span>
             <select className="form-control" name="timeSlot"  value={this.state.timeSlot}
                 onChange={this.handleInputChange} maxLength ="1000" required >
                 <option value="">Select Show Times</option>
                 <option value="10.30 A.M - 1.00 P.M">10.30 A.M - 1.00 P.M</option>
                 <option value="2.00 P.M - 4.30 P.M">2.00 P.M - 4.30 P.M</option>    
                 <option value="5.00 P.M - 7.30 P.M">5.00 P.M - 7.30 P.M</option>
                 <option value="8.00 P.M - 10.30 P.M">8.00 P.M - 10.30 P.M</option>
             </select>
            </div>

            <div className="col-md-6" align="left">
                <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Book Date</span>
                    <input type="date" className="form-control" name="bookingDate" placeholder="Select Booking Date" Required = "required"
                        value={this.state.bookingDate} onChange={this.handleInputChange} />
                           </div>
         
                            <div className="col-md-6" align="left">
                         <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> No Of Tickects</span>
                     <input type="number" className="form-control" name="noOfTickects" placeholder="Enter No Of Tickets" Required = "required" 
                        value={this.state.noOfTickects } 
                          onChange={this.handleInputChange} />
                             <span id="passwordHelpInline" class="form-text"> Tickect Price : Rs.700.00 </span>
                                 </div>

                            <div className="col-md-6" align="left">
                       <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Email</span>
                    <input type="text" className="form-control" name="email" placeholder="Select Booking Date" Required = "required"
                        value={this.state.email} onChange={this.handleInputChange} />
                           </div>

                                 <div align="right"><br/>
                                      <Button
                                            onClick={this.onSubmit}
                                            style={{ color:"white", background:"#08368b"}}
                                            variant="outlined"
                                            startIcon={<BookmarkAddedIcon />}
                                          >
                                          Book Movie
                                        </Button> &nbsp;&nbsp; &nbsp;&nbsp;

                                        <Button
                                              href='/dashboard'
                                              style={{ color:"white", background:"#A70D2A" }}
                                              variant="outlined"
                                              startIcon={<CancelIcon />}
                                            >
                                            Cancel Booking
                                              </Button> <br/> <br/>
                        </div>            
                     </form>
                  </div>
               </div>
             </div>
           </div>  
        <Footer/>
    </div> 
    )
  }
}
