import React, { Component } from 'react';
import axios from 'axios';
import MovieMainNavBar from './MovieMainNavBar';
import Button from "@material-ui/core/Button";
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default class PaymentMethod extends Component {
    constructor(props){
        super(props);
        this.state = {
            paymentMethod:"",  
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
    const{paymentMethod } = this.state;
    const data = {
        paymentMethod:paymentMethod,
}

console.log(data);
axios.post("http://localhost:8070/api/paymentmethod/ad",data).then((res)=>{
    if(res.data.success){
        window.location.href = '/';
        this.setState({  
            paymentMethod:"",
      });
    }
  });
}
render() {
    return (
        <div style={{ backgroundColor:"#123456" ,height:"900px"}} >
           <MovieMainNavBar/>
           <div align="center"> <br/><br/><br/><br/><br/>
              <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
               <div className="card-header py-2">
               <div class="card-header" style={{background: "#E3E4FA"}}><h2>Add Payment Method</h2></div><br/>
              
              <form> 
              <div className="col-md-6" align="left">
                <label style={{marginBottom:'5px',fontSize: 20, color: "#737CA1"}} className="form-label"><b> Your Total Amount : {}</b> </label>
              </div><br/>

              <div class="form-check" align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                Creadit Card
                </label>
              </div>

              <div class="form-check" align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault2" align="center"> Debit Card  </label>
              </div> <br/><br/>
              
              <div align="center">
              <Button
                  href='/carddetails/add'
                  style={{ color:"white", background:"#08368b"}}
                  variant="outlined"
                  startIcon={<AddTaskIcon />}
                > Pay Now
               </Button> &nbsp;&nbsp; &nbsp;&nbsp;
               
               <Button
                  href='/'
                  style={{ color:"white", background:"#08368b" }}
                  variant="outlined"
                  startIcon={<ArrowCircleLeftIcon />}
                > Go Home Page
               </Button> 
                       <br/>
                     <br/>
                  </div>            
                 </form>
                </div>
            </div>
         </div>
        </div>
    )

  }
}
