import React, { Component } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';

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
        this.setState({
          movieName:"",
          timeSlot:"",
          description:"",
          banner:"",
          cast:"",
        })
      }
    })
  }
  
  render() {
    return (
      <div align="center">

         <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
         <div className="card-header py-3">
          <div class="card-header" style={{background: "#E3E4FA"}}><h2>Add New Movies</h2></div>
          <br/> 
          
          <form className="row g-3" > 
          
           <div>
           <div align="left">
             <label style={{marginBottom:'5px'}} className="form-label"  Required="required"> Movie Name </label></div>
             <input type="text" className="form-control" name="movieName" placeholder="Enter Movie Name" Required = "required"
              value={this.state.movieName}
              onChange={this.handleInputChange} />
            </div>

            <div>
            <div align="left">
             <label style={{marginBottom:'5px'}} className="form-label"  Required="required">Show Times </label></div>
             <select className="form-control" name="timeSlot"  value={this.state.timeSlot}
              onChange={this.handleInputChange} maxLength ="1000" required >
                 <option value="">Select Show Times</option>
                 <option value="10.30 A.M - 1.00 P.M">10.30 A.M - 1.00 P.M</option>
                 <option value="2.00 P.M - 4.30 P.M">2.00 P.M - 4.30 P.M</option>    
                 <option value="5.00 P.M - 7.30 P.M">5.00 P.M - 7.30 P.M</option>
                 <option value="8.00 P.M - 10.30 P.M">8.00 P.M - 10.30 P.M</option>
             </select>
            </div>
           
            <div>
            <label style={{marginBottom:'5px'}} className="form-label"  Required="required"> Movie Cast </label>
            <input type="date" className="form-control" name="cast" placeholder="Select Movie Cast Date" Required = "required"
              value={this.state.cast}
              onChange={this.handleInputChange} />
            </div>

           <div>
           <div align="left">
             <label style={{marginBottom:'5px'}} className="form-label"   Required="required"> Movie Description </label>
             <textarea type="text" style={{marginBottom:'5px', height: '150px'}} className="form-control" name="description" placeholder="Enter Movie Description" Required = "required"
              value={this.state.description}
              onChange={this.handleInputChange} /></div>
            </div> 
           
            <div align="left">
            <FileBase64 type="file" name="banner" multiple={ false } onDone={({ base64 }) => this.setState({  banner: base64 })}/>
            </div>

            <button className="btn btn-primary" type="submit" style={{marginBottom:'5px'}} onClick={this.onSubmit}>
             &nbsp; Add Movie
             </button>

          </form><br/>
          </div>
          </div>
      </div>
    )
  }
}
