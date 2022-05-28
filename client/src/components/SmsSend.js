import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
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
    <div className="container ">

         <form onSubmit={changeOnClick} encType="">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlfor="name">phone number</label>
              <br />
              <input
                type="text"
                onChange={(f) => setphonenumber(f.target.value)}
                className="form-control"
                value={94766952510}
                placeholder="phonenumber"
              />
            </div>
     </div>
     <button type="submit" className="btn btn-primary">
            Add 
          </button>
     </form>
     </div>
        
 
  )
}


export default SmsSend;