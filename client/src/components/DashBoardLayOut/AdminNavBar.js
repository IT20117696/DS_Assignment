import React, { Component } from "react";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

export default class AdminNavBar extends Component {
  render(){
        return(
    <div> 
       <nav class="navbar navbar-expand-lg " style={{ backgroundColor:"#0C090A"}} >
       <img
            src="https://i.pinimg.com/originals/4e/27/20/4e2720f6b5d69f2fbc71f379ae2b9920.jpg"
            width="260px"
            height="110"
            className="d-inline-block align-top"
            alt=""/>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 

       <div class="container">  
       <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
       <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 

       <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/movie/display" style={{color: "#ffff"}}>Movie Details</a>
        </li> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; 

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/movie/add" style={{color: "#ffff"}}>Add New Movies</a>
        </li>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" style={{color: "#ffff"}}>Trailers Add</a>
        </li>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" style={{color: "#ffff"}}>Contact Us</a>
        </li>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; 

        <li class="nav-item">
          <a class="nav-link" href="/bookmovie/display" style={{color: "#ffff"}}>Booking Details</a>
        </li>  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; 
        {/* <i class="fa fa-user-circle fa-lg  mt-3 fa-3x"  aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i>  */}
        <IconButton aria-label="profile" href="/admin/profile" style={{color: "#FFFFFF"}} >
            <PersonIcon fontSize="large" />
            </IconButton> 
        </ul>
      </div>
    </div>
  </nav>
 </div>
        )
    }
}