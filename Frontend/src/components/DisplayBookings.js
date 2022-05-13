import React, { Component } from 'react';
import axios from 'axios';
import MovieMainNavBar from './DashBoardLayOut/MovieMainNavBar';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import IconButton from '@material-ui/core/IconButton';

export default class DisplayBookings extends Component {
  constructor(props){
    super(props);
    this.generateReport = this.generateReport.bind(this);
    this.state = {
        bookmovie :[]
    };
}

generatepdf(){
  window.location.reload();
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

//generate report
async generateReport() {
  const obj = {bookmovie: this.state.bookmovie }
  await axios.post('http://localhost:8070/generatebookingreport', obj,{ responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, 
  }).then((res) => {
    alert('Report Generated')
    const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
    saveAs(pdfBlog, 'Booking.pdf');
  }).catch((err) => {
    console.log(err.message) 
  })  
  console.log(obj) 
}


  render() {
    return (
      <div>
         <MovieMainNavBar/>
         <div className='container'>
         <br/><br/>
         <div align="right">
          <br/>
         <IconButton aria-label="delete" size="small"
                      style={{background: "#033E3E"}} href={`/movie/add`}>
          <FileDownloadIcon fontSize="large"  style={{color: "white"}}/>
          </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br/><a><b>Download&nbsp; Report</b></a> <br/> <br/></div>

     
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
