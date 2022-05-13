import React, { Component } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieMainNavBar from './DashBoardLayOut/MovieMainNavBar';
import Footer from './footer';

toast.configure()

export default class AddMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieName:"",
      timeSlot:"",
      description:"",
      banner:"",
      cast:"",
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
    const{movieName,timeSlot,description,banner,cast } = this.state;
    const data = {
      movieName:movieName,
      timeSlot:timeSlot,
      description:description,
      banner:banner,
      cast:cast
    }
    console.log(data);
    axios.post("http://localhost:8070/api/movie/add",data).then((res)=>{
      if(res.data.success){
          toast.success('Movie Added Successfully',{position:toast.POSITION.TOP_CENTER});
          window.setTimeout(function() {
          window.location.href = '/movie/display';
         
      }, 2000);        
        this.setState({
          movieName:"",
          timeSlot:"",
          description:"",
          banner:"",
          cast:"",
        })
      }
    }).catch(()=>{
      toast.success('Movie Added UnSuccessfully',{position:toast.POSITION.TOP_CENTER});
     });
  }
  
  render() {
    return (
      <div>
        <MovieMainNavBar/>
      <div align="center"><br/> <br/>     
         <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
         <div className="card-header py-3">
          <div class="card-header" style={{background: "#E3E4FA"}}><h2>Add New Movies</h2></div>
          <br/> 
          
          <form className="row g-2" > 
      
           <div align="left">
           <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Movie Name </span></div>
             <input type="text" className="form-control" name="movieName" placeholder="Enter Movie Name" Required = "required"
              value={this.state.movieName}
              onChange={this.handleInputChange} />

            <div align="left">
            <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Show Times</span></div>
             <select className="form-control" name="timeSlot"  value={this.state.timeSlot}
              onChange={this.handleInputChange} maxLength ="1000" required >
                 <option value="">Select Show Times</option>
                 <option value="10.30 A.M - 1.00 P.M">10.30 A.M - 1.00 P.M</option>
                 <option value="2.00 P.M - 4.30 P.M">2.00 P.M - 4.30 P.M</option>    
                 <option value="5.00 P.M - 7.30 P.M">5.00 P.M - 7.30 P.M</option>
                 <option value="8.00 P.M - 10.30 P.M">8.00 P.M - 10.30 P.M</option>
             </select>
           
             <div align="left">
             <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Movie Cast </span>
            <input type="date" className="form-control" name="cast" placeholder="Select Movie Cast Date" Required = "required"
              value={this.state.cast}
              onChange={this.handleInputChange} />
             </div>

            <div align="left">
             <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Movie Description </span>
             <textarea type="text" style={{marginBottom:'5px', height: '150px'}} className="form-control" name="description" placeholder="Enter Movie Description" Required = "required"
              value={this.state.description}
              onChange={this.handleInputChange} /></div>

            <div align="left">
            <FileBase64 type="file" name="banner" multiple={ false } onDone={({ base64 }) => this.setState({  banner: base64 })}/>
            </div><br/>

            <button className="btn btn-primary" type="submit" style={{marginBottom:'5px'}} onClick={this.onSubmit}>
             &nbsp; Add Movie
            </button>

          </form><br/>
          </div>
          </div><br/><br/>
      </div>
      <Footer/>
      </div>
    )
  }
}
