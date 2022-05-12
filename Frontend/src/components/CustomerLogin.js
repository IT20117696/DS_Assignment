import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import MovieMainNavBar from './MovieMainNavBar';
import Footer from './footer';

export default class CustomerLogin extends Component {
    constructor(props){
        super(props);
        this.CustomerLoginSubmit = this.CustomerLoginSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        
        this.state={
            email:"",
            pwd:"",
            token: "",
            open: false,
         
        }
    }  
      async CustomerLoginSubmit(e){
        e.preventDefault()
        const userData = {
          email: this.state.email,
          pwd:this.state.pwd
      }

    await axios.post("http://localhost:8070/api/customer/signin",userData)
       .then((res)=>{
           this.setState({
               token:res.data.token
           })
           localStorage.setItem("Authorization",res.data.token)
           alert('Login Successfull!!');
       })
       .catch((err)=>{
           console.log(err)
           this.setState({open:true})
           alert('Loging Failded.Please Try again!!',err);
       })
      }

      handleClose(reason) {
        if (reason === 'clickaway') {
         return;
        }
        this.setState({open: false})
     };

    render() {
    return (

    <div style={{ backgroundColor:"#2B3856" }} >
     <MovieMainNavBar/><br/><br/><br/>
     <div class="row d-flex align-items-center justify-content-center">
      <div style={{width: 900,background: "#CCCCFF",height:450}}><br/>
        <div class="card-body" > 
          <div class="container py-5 h-90" > 
           <div class="row d-flex align-items-center justify-content-center h-100">      
             
             <div class="col-md-8 col-lg-7 col-xl-6"> 
               <img src="https://ey5me.csb.app/happy.svg" class="img-fluid" alt="Phone image"/>  <br/><br/>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;
                  <u><b>CUSTOMER&nbsp;&nbsp;LOGIN</b></u></h2> 
              </div>
              
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form onSubmit={this.userLoginSubmit} name="form"> 
                      <div class="form-outline mb-4">  
                      <div className="col-md-9">
                      <i className="fa fa-lock"> &nbsp;&nbsp;</i>            
                        <label class="form-label"><b>User Email Address </b></label>
                          <input type="text" name="email" placeholder='Enter email here' class="form-control "
                                  onChange={e=>this.setState({email:e.target.value})} required/>
                      </div>
                      </div>

                      <div class="form-outline mb-4" >
                        <div className="col-md-9">
                        <i className="fa fa-key"> &nbsp;&nbsp;</i>    
                        <label class="form-label"><b>PASSWORD</b></label>
                        <input type="password" name="password" class="form-control " placeholder="Enter your Password" 
                                onChange={e=>this.setState({pwd:e.target.value})} required/> 
                      </div>
                    </div>
               <Button 
                  // href={`/bookmovie/add/${_id}`}
                    type="submit" class="btn btn-primary">
                  <i className="fa fa-check-circle"> &nbsp;&nbsp;  Sign in &nbsp;&nbsp;</i></Button>
     
                <div class="divider d-flex align-items-center my-4">
                      <center><label >Not Registered? &nbsp;&nbsp;</label>
                      <a href='/customer/signup'>Sign Up</a></center>
                 </div>
               </form>   
             </div> 
           </div>
         </div>
       </div>
     </div>
   </div><br/><br/>
   <Footer/>
</div>
    )
  }
}
