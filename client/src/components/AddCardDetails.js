import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import PaidIcon from '@mui/icons-material/Paid';
import CancelIcon from '@mui/icons-material/Cancel';
import MovieMainNavBar from './DashBoardLayOut/MovieMainNavBar';
import Footer from './footer';

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
      amount:"",
      totalAmount:"",
      email:"",
      name:"",
      id:"",
      movieName:"",
      theater:"",
      date:"",
      sendemail:""
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
     this.getUserDetails();
     const id= this.props.match.params.id;
     axios.get(`http://localhost:8070/api/carddetails/display/${id}`).then((res)=>{
         this.setState({
             amount:res.data.selectedBookmovie.amount,
             id:res.data.selectedBookmovie._id,
             movieName:res.data.selectedBookmovie.movieName,
             theater:res.data.selectedBookmovie.theater,
             date:res.data.selectedBookmovie.bookingDate,
        })
     })
  }

  getUserDetails(){
    try{
    const config = {
      headers:{
        Authorization:localStorage.getItem("Authorization")
      }
    }
    axios.get(`http://localhost:8070/api/profile`,config).then((res)=>{
    if(res.data.success){
      this.setState({
        email:res.data.Customer.email,
        name:res.data.Customer.customerName 
      })
    }
    // console.log(this.state)
    })
  }catch(error){
    console.log(error.message)
    }
  }

  onSubmit = (e)=>{
       e.preventDefault();
       const{cardMethod,cardNumber,cardHolderName,cvv,expirationMonth,expirationYear ,totalAmount} = this.state;
      
       const data = {
            cardMethod:cardMethod,
            cardNumber:cardNumber,
            cardHolderName:cardHolderName,
            cvv:cvv,
            expirationMonth:expirationMonth,
            expirationYear:expirationYear,
            totalAmount:totalAmount,
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
          totalAmount:"",

        })
        console.log("payment success")
        this.sendemail();
      }
    }).catch((error)=>{
      console.log(error)
    })
  }
    
  sendemail(){
      const data2 = {
      reciverMail:this.state.email, 
      senderMail:"mgmmoviereservation@gmail.com",
      reciverName:this.state.name, 
      reservationid:this.state.id,
      movieName:this.state.movieName,
      theater:this.state.theater,
      date:this.state.date
    }
  
    axios.post("http://localhost:8070/api/moviepayment/sendemail",data2).then((res)=>{
     if(res.status){
        alert("Thank you. Your Payment is Pending.Pleade check your email!!")
        window.location = "/dashboard"
      }
    })
  }

render() {
    return (
      <div style={{ backgroundColor:"#2B3856" ,height:"900px"}} >
         <MovieMainNavBar/>
            <div align="center">  <br/> <br/><br/>
              <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
                 <div className="card-header py-3">
                   <div class="card-header" style={{background: "#E3E4FA"}}><h2>Add Card Details</h2></div><br/>
                      <form className="row g-2"onSubmit={this.onSubmit} > 
                         <label style={{marginBottom:'5px',fontSize: 20, color: "#737CA1"}} className="form-label"><b> Your Total Amount : {this.state.amount}</b> </label>
 
                    <div className="col-md-6" align="left">
                <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Card Method</span>
             <select className="form-control" name="cardMethod"  value={this.state.cardMethod}
          onChange={this.handleInputChange} maxLength ="1000" Required = "required">
               <option value="">Select Method</option>
                  <option value="Credit Card">Credit Card</option>
                      <option value="Debit Card">Debit Card</option>    
                          </select>
                              </div>
        
                              <div className="col-md-6" align="left">
                         <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Card Number</span>
                     <input type="tel" className="form-control" name="cardNumber" placeholder="0000 0000 0000 0000" maxLength={16} minLength={16} 
                 value={this.state.cardNumber } onChange={this.handleInputChange} required/><br/>
            </div>

            <div className="col-md-6" align="left">
               <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}>Card Holder Name </span>
                  <input type="text" className="form-control" name="cardHolderName" placeholder="Enter Card Holder Name"  
                      value={this.state.cardHolderName } onChange={this.handleInputChange} required/><br/>
                         </div>

                              <div className="col-md-6" align="left">
                           <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> CVV</span>
                       <input type="tel" className="form-control" name="cvv" placeholder="000" maxLength={3} minLength={3} 
                  value={this.state.cvv }  onChange={this.handleInputChange}required /><br/>
              </div>

              <div className="col-md-6" align="left">
                  <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Expiration Month</span>
                      <select className="form-control" name="expirationMonth" value={this.state.expirationMonth}
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
                      <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Expiration Year </span>
                 <select className="form-control" name="expirationYear" value={this.state.expirationYear}
                       onChange={this.handleInputChange} maxLength ="1000" required >
                          <option value="">Select Expiration Year</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>    
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>    
                          <option value="2028">2028</option>
                        </select>
            </div>

              <div className="col-md-6"  align="left">
                 <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Please Enter Total Amount  </span>
                    <input type="text"  style={{marginBottom:'5px'}} className="form-control" name="totalAmount" Required = "required" 
                       value={this.state.totalAmount } onChange={this.handleInputChange} />
                         </div>

            <div align="right"><br/>
               <Button
                  type="submit"
                  style={{ color:"white", background:"#08368b"}}
                  variant="outlined"
                  startIcon={<PaidIcon />}
                >
                Confirm Payment
              </Button> &nbsp;&nbsp; &nbsp;&nbsp;
              
              <Button
                  href='/dashboard'
                  style={{ color:"white", background:"#A70D2A" }}
                  variant="outlined"
                  startIcon={<CancelIcon />}
                >
                 Cancel 
                       </Button> 
                    <br/>
                </div>            
            </form>
                </div>
                  </div><br/><br/><br/><br/><br/>
                     <Footer/>
                        </div>
                          </div>  
    )
  }
}