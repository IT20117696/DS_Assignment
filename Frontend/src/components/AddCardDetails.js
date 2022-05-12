import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import PaidIcon from '@mui/icons-material/Paid';
import CancelIcon from '@mui/icons-material/Cancel';
import MovieMainNavBar from './MovieMainNavBar';

export default class AddCardDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardMethod:"",
      cardNumber:"",
      cardHolderName:"",
      cvv:"",
      expirationMonth:"",
      expirationYear:"",
      amount:""
    }
  }
  handleInputChange = (e)=>{
    const{name,value} = e.target;
    this.setState({
      ...this.state,
      [name]:value
    });
  }
  componentDidMount(){
    const id= this.props.match.params.id;
   axios.get(`http://localhost:8070/api/carddetails/display/${id}`).then((res)=>{
    //  console.log(res.data.selectedBookmovie)
    this.setState({
      amount:res.data.selectedBookmovie.amount
    })
    console.log(this.state.amount)
   })
  }


  onSubmit = (e)=>{
    e.preventDefault();
    const{cardMethod,cardNumber,cardHolderName,cvv,expirationMonth,expirationYear ,couponNumber} = this.state;
    const data = {
      cardMethod:cardMethod,
      cardNumber:cardNumber,
      cardHolderName:cardHolderName,
      cvv:cvv,
      expirationMonth:expirationMonth,
      expirationYear:expirationYear,
    }

    console.log(data);
    axios.post("http://localhost:8070/api/carddetails/add",data).then((res)=>{
      if(res.data.success){
        this.setState({
          cardMethod:"",
          cardNumber:"",
          cardHolderName:"",
          cvv:"",
          expirationMonth:"",
          expirationYear:"",
        });
      }
    });
  }

  render() {
    return (
      <div style={{ backgroundColor:"#123456" ,height:"900px"}} >
      <MovieMainNavBar/>
       <div align="center">  <br/> <br/>
        <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
         <div className="card-header py-3">
         <div class="card-header" style={{background: "#E3E4FA"}}><h2>Add Card Details</h2></div><br/>
         <form className="row g-3" > 

         <label style={{marginBottom:'5px',fontSize: 20, color: "#737CA1"}} className="form-label"><b> Your Total Amount : {this.state.amount}</b> </label>

         <div className="col-md-6" align="left">
             <label style={{marginBottom:'5px'}}  className="form-label"  Required="required"><b>Card Method</b> </label>
             <select className="form-control" name="cardMethod"  value={this.state.cardMethod}
              onChange={this.handleInputChange} maxLength ="1000" required >
                 <option value="">Select Method</option>
                 <option value="Credit Card">Credit Card</option>
                 <option value="Debit Card">Debit Card</option>    
             </select>
            </div>
        
            <div className="col-md-6" align="left">
             <label style={{marginBottom:'5px'}} className="form-label"><b>Card Number </b> </label>
             <input type="number" className="form-control" name="cardNumber" placeholder="0000-0000-0000-0000" Required = "required" 
              value={this.state.cardNumber } 
              onChange={this.handleInputChange} /><br/>
            </div>

            <div className="col-md-6" align="left">
             <label style={{marginBottom:'5px'}} className="form-label"><b>Card Holder Name</b> </label>
             <input type="text" className="form-control" name="cardHolderName" placeholder="Enter Card Holder Name" Required = "required" 
              value={this.state.cardHolderName } 
              onChange={this.handleInputChange} /><br/>
            </div>

            <div className="col-md-6" align="left">
             <label style={{marginBottom:'5px'}} className="form-label"><b>Card Holder Name</b> </label>
             <input type="number" className="form-control" name="cvv" placeholder="000" Required = "required" 
              value={this.state.cvv } 
              onChange={this.handleInputChange} /><br/>
            </div>

            <div className="col-md-6" align="left">
             <label style={{marginBottom:'5px'}}  className="form-label"  Required="required"><b>Expiration Month</b> </label>
             <select className="form-control" name="expirationMonth"  value={this.state.expirationMonth}
              onChange={this.handleInputChange} maxLength ="1000" required >
                 <option value="">Select Expiration Month</option>
                 <option value="Jan">Jan</option>
                 <option value="Feb">Feb</option>    
                 <option value="Mar">Mar</option>
                 <option value="Apr">Apr</option>
                 <option value="May">May</option>
                 <option value="Jun">Jun</option>    
                 <option value="Jul">Jul</option>
                 <option value="Aug">Aug</option>
                 <option value="Sep">Sep</option>
                 <option value="Oct">Oct</option>    
                 <option value="Nov">Nov</option>
                 <option value="Dec">Dec</option>
             </select>
            </div>

            <div className="col-md-6" align="left">
             <label style={{marginBottom:'5px'}} className="form-label"><b>Expiration Year</b> </label>
             <input type="number" className="form-control" name="expirationYear" placeholder="0000" Required = "required" 
              value={this.state.expirationYear } 
              onChange={this.handleInputChange} /><br/>
            </div>

            <div align="right">
            <Button
                  onClick={this.onSubmit}
                  style={{ color:"white", background:"#08368b"}}
                  variant="outlined"
                  startIcon={<PaidIcon />}
                >
                Confirm Payment
              </Button> &nbsp;&nbsp; &nbsp;&nbsp;
              <Button
                  href='/'
                  style={{ color:"white", background:"#A70D2A" }}
                  variant="outlined"
                  startIcon={<CancelIcon />}
                >
                 Cancel 
                  </Button> <br/> <br/>
                </div>            

            </form>
           </div>
         </div>
       </div>
     </div>  
    )
  }
}


