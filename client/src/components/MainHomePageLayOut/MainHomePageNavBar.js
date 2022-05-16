import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default class MovieMainNavBar extends Component {
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
          <a class="nav-link" aria-current="page" href="#" style={{color: "#ffff"}}>Dashboard</a>
        </li> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" style={{color: "#ffff"}}>Upcomming Movie</a>
        </li>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" style={{color: "#ffff"}}>Thearters</a>
        </li>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 

        <li class="nav-item">
          <a class="nav-link" href="#" style={{color: "#ffff"}}>Blogs</a>
        </li> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
       
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color: "#ffff"}}>Contact Us</a>
        </li>  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
        </ul>
            <form class="d-flex"><br/>
            <input class="form-control mt-3" type="search" placeholder="Search" aria-label="Search"/> </form>  &nbsp;&nbsp;  &nbsp;&nbsp;
            <i class="fa fa-search fa-lg  mt-3"  aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i>   &nbsp;&nbsp;&nbsp;&nbsp;     
           
            <IconButton type="button" data-bs-toggle="modal"  data-bs-target="#exampleModal">
            <i class="fa fa-user-circle fa-lg  mt-3 fa-2x"  aria-hidden="true" type="submit" style={{color: "#ffff"}} ></i>  &nbsp;&nbsp;&nbsp;&nbsp;     
            </IconButton>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">LOGIN AS </h5>         
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          
            <div class="modal-body" align="right">
            <Button
                  href='/admin/signin'
                  style={{ color:"white",background:"#990012" }}
                  variant="outlined"
                  startIcon={<AccountCircleIcon />}
                >
               Admin
              </Button>   &nbsp;&nbsp;

               <Button
                  href='/customer/signin'
                  style={{ color:"white",  background:"#08368b" }}
                  variant="outlined"
                  startIcon={<AccountCircleIcon />}
                >
               User
              </Button>      
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </nav>
 </div>
        )
    }
}