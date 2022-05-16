import React, {useState} from 'react';
import axios from 'axios';
import MainHomePageNavBar from './MainHomePageLayOut/MainHomePageNavBar';
import Footer from './footer';
import Button from "@material-ui/core/Button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function AdminRegisteration(){
    const [adminName,setadminName] = useState("");
    const [phone,setphone] = useState("");
    const [email,setemail] = useState("");
    const [pwd1, setPassowrd1] = useState("");
    const [pwd2, setPassowrd2] = useState("");

    const sendData = async (e)=>{
        e.preventDefault();

        let newAdmin = {
            adminName : adminName ,
            phone : phone,
            email : email,
            pwd : pwd1
        }   
   if(pwd1==pwd2){
    axios.post("http://localhost:8070/api/admin/signup",newAdmin )
      .then(()=>{
      //  alert("Registeration Success!!");
      toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER});
      window.location = "/admin/signin"
    }).catch((err)=>{
      //   alert(err)
      toast.warning('Admin account already exists. Please check your Email.',{position:toast.POSITION.TOP_CENTER});
            })
        }else{
            // alert("Password Dismatch");
            toast.warning('Password dismatch',{position:toast.POSITION.TOP_CENTER});
        }  
        setadminName("");
        setphone("");
        setemail("");
        setPassowrd1("");
        setPassowrd2("");
    }
    return (
        <div style={{ backgroundColor:"#2B3856" }} >
          <MainHomePageNavBar/><br/><br/>
            <div>
              <div class="row d-flex align-items-center justify-content-center">
               <div style={{width: 1000,background: "#EBF4FA",height:550}}>
                <div class="card-body" >       
                  <form action="" method="post" name="form" onSubmit={sendData}> 
                   <div class="row g-0">
                    <div class="col-xl-7 d-none d-xl-block">
                     <h3 align="center"><b><u>ADMIN&nbsp;&nbsp;REGISTERATION</u></b></h3><br/>
                     
                       <img src="https://webbuilders.lk/wp-content/uploads/2019/03/boost_img.png" style={{width: 500}}/>
                    </div>
               <div class="col-xl-5" > <br/>
            <div class="form-outline mb-2"><br/>
          <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> 
       <i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Full Name</span>
          <div className="col-md-10">
             <input type="text"class="form-control" onChange={(e) => setadminName(e.target.value)} required/>
                </div>
                   </div>
 
                      <div class="form-outline mb-2">
                         <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> 
                           <i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Phone Number</span>
                             <div className="col-md-10">
                                <input type="text" class="form-control" onChange={(e) => setphone(e.target.value)} pattern="[0-9]{10}" required />
                                  </div>
                                     </div>
 
                               <div class="form-outline mb-2">
                           <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> 
                       <i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;Email Address</span>
                  <div className="col-md-10">
                    <input type="email" class="form-control"
                        pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                           inputMode="email"
                              onChange={(e) => setemail(e.target.value)} required/>
                                </div>
                                   </div>
              
                              <div class="form-outline mb-2">
                           <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> 
                       <i class="fa fa-key" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Password</span>
                   <div className="col-md-10">
                     <input type="password" class="form-control" data-toggle="tooltip" data-placement="center" title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                         pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                             onChange={(e) => setPassowrd1(e.target.value)} required/>
                                </div>
                                    </div>
         
                                  <div class="form-outline mb-2">
                               <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> 
                          <i class="fa fa-unlock-alt"></i>&nbsp;&nbsp;&nbsp;Repeat Password</span>
                     <div className="col-md-10">
                  <input type="password" class="form-control"  title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
               pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                 onChange={(e) => setPassowrd2(e.target.value)}/>
                    </div>
                        </div>
     
                            <div class="d-flex justify-left pt-1" >
                               <span id="passwordHelpInline" class="form-text" style={{marginBottom:'2px'}}> Already Registered? &nbsp;&nbsp;</span>
                                 <a href="/admin/signin" >Sign In</a> </div>
                                    <br/>
                                       <div class="d-flex justify-content">
                                <Button 
                                    // href="/admin/signin"
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
