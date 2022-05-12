import React, {useState} from 'react';
import axios from 'axios';
import MovieMainNavBar from './MovieMainNavBar';
import Footer from './footer';
import Button from "@material-ui/core/Button";

export default function CustomerRegisteration(){
    const [customerName,setcustomerName] = useState("");
    const [phone,setphone] = useState("");
    const [email,setemail] = useState("");
    const [pwd1, setPassowrd1] = useState("");
    const [pwd2, setPassowrd2] = useState("");

    const sendData = async (e)=>{
        e.preventDefault();

        let new_customer = {
            customerName : customerName ,
            phone : phone,
            email : email,
            pwd : pwd1
        }
        if(pwd1==pwd2){
            axios.post("http://localhost:8070/api/customer/signup",new_customer )
            .then(()=>{
                alert("Registeration Success!!");
            }).catch((err)=>{
                alert(err)
            })
        }else{
            alert("Password Dismatch");
        }
        setcustomerName("");
        setphone("");
        setemail("");
        setPassowrd1("");
        setPassowrd2("");
    }

    return (
    <div style={{ backgroundColor:"#2B3856" }} >
       <MovieMainNavBar/><br/><br/>
       <div>
        <div class="row d-flex align-items-center justify-content-center">
          <div style={{width: 1000,background: "#CCCCFF",height:520}}>
            <div class="card-body" >       
             <form action="" method="post" name="form" onSubmit={sendData}> 
               <div class="row g-0">
                <div class="col-xl-7 d-none d-xl-block"><br/>
                <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b><u>CUSTOMER&nbsp;&nbsp;REGISTERATION&nbsp;&nbsp; FORM</u></b></h3><br/>
                    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg" style={{width: 550}}/>
                    </div>
             
               <div class="col-xl-5"> <br/>
                 <div class="form-outline mb-2">
                 <label class="form-label">
                 <b><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Full Name</b></label>
                 <div className="col-md-10">
                <input type="text"class="form-control" onChange={(e) => setcustomerName(e.target.value)} required/>
              </div></div>

              <div class="form-outline mb-2">
              <label class="form-label">
                <b><i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Phone Number</b></label>
                <div className="col-md-10"><input type="text" class="form-control" onChange={(e) => setphone(e.target.value)} pattern="[0-9]{10}" required />
              </div></div>

              <div class="form-outline mb-2">
              <label class="form-label">
              <b><i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;Email Address</b></label>
              <div className="col-md-10"><input type="email" class="form-control"
                pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                inputMode="email"
                onChange={(e) => setemail(e.target.value)} required/>
              </div></div>

             
              <div class="form-outline mb-2">
              <label class="form-label">
              <b><i class="fa fa-key" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Password</b></label>
              <div className="col-md-10"><input type="password" class="form-control" data-toggle="tooltip" data-placement="center" title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
              onChange={(e) => setPassowrd1(e.target.value)} required/>
              </div></div>

              <div class="form-outline mb-2">
              <label class="form-label">
              <b><i class="fa fa-unlock-alt"></i>&nbsp;&nbsp;&nbsp;Repeat Password</b></label>
              <div className="col-md-10"><input type="password" class="form-control"  title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
              onChange={(e) => setPassowrd2(e.target.value)}/>
              </div></div>
    
              <div class="d-flex justify-left pt-1" >
               <label >Already Registered? &nbsp;&nbsp;</label>
               <a href="/customer/signin" >Sign In</a> </div>
               
               <div class="d-flex justify-content-end">
               <Button 
                    href="/customer/signin"
                    type="submit" class="btn btn-primary">
                  <i className="fa fa-check-circle"> &nbsp;&nbsp;  Submit &nbsp;&nbsp;</i></Button></div>
     
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div><br/><br/><br/>
<Footer/>
</div>
    )
}

