import React, { Component } from 'react';
import axios from 'axios';

export default class CustomerLogin extends Component {
    constructor(props){
        super(props);
        this.CustomerLoginSubmit = this.CustomerLoginSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        
        this.state={
            email:"",
            pwd:"",
            token: "",
            open: false
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
           alert('Loging Failde',err);
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
      <div>
          <form onSubmit={this.CustomerLoginSubmit} name="form">
              <label> Email</label>
              <input type="text" name="email" placeholder='Enter email here' 
                 onChange={e=>this.setState({email:e.target.value})} required/>
              
              <br/><br/>

              <label> Password </label>
              <input type="password" name='password' placeholder='Enter password here'
                 onChange={e=>this.setState({pwd:e.target.value})} required/>
             
             <button type="submit">Login</button>
          </form>
      </div>
    )
  }
}
