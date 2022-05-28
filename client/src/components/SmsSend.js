import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import AdminNavBar from './DashBoardLayOut/AdminNavBar';
import Footer from './footer';

 const SmsSend = () => {

    const [phonenumber, setphonenumber] = useState("");
    const changeOnClick = (f) => {
        //f.preventDefault();  
        const addphone = {   
            phonenumber,
         
        };
        axios.post("http://localhost:8070/smsroute/sms", addphone);   
        Swal.fire("Congrats", "  succeessfully", "success");
        window.location='/bookmovie/display'
      
      };

  return (
   <div>
      <AdminNavBar/> 
        <div class="row d-flex align-items-center justify-content-center">
              <div style={{width: 800,background: "#E6E6FA",height:300}}>
                 <div class="card-body" >  
                 <div class="card-header" align="center" style={{ontFamily:"work sans" , fontSize:"30px" ,fontWeight:"bold"}}> Sending SMS </div>
                   <div class="container py-5 h-20" > 
                    <div class="row d-flex align-items-center">      
                 <div class="col-md-8 col-lg-9 col-xl-6"> 
             <div className="container " >
          <form onSubmit={changeOnClick} encType="">
            <div className="form-row">
              <div className="form-group col-md-40">
                <label htmlfor="name">Phone Number</label>
                  <br/>
              <input
                type="text"
                onChange={(f) => setphonenumber(f.target.value)}
                className="form-control"
                value={94766952510}
                placeholder="phonenumber"
              />
           </div>
       </div>
         <br/>
           <button type="submit" className="btn btn-primary">
           Send Message
           </button> 
                </form>
             </div>
          </div></div></div></div></div><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       <Footer/>
     </div>     
   </div>
  )
}


export default SmsSend;