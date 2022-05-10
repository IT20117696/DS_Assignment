import React, {useState} from 'react';
import axios from 'axios';

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
            axios.post("localhost:8070/api/customer/signup",new_customer )
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
      <form action='' method="post" name="form" onSubmit={sendData}>
                   
            <label class="form-label">Customer Name</label>
            <input type="text"   
                   onChange={(e) => setcustomerName(e.target.value)} required/><br/>
        
            <label class="form-label" for="form3Example9">Phone Number</label>
            <input type="text" id="form3Example9"
                   onChange={(e) => setphone(e.target.value)}
                   pattern="[0-9]{10}" required /><br/>
      
     
            <label class="form-label">Email Address</label>
            <input type="email"  
                    pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                    inputMode="email"
                    onChange={(e) => setemail(e.target.value)} required/><br/>
          

     
            <label class="form-label">Password</label>
            <input type="password" 
                   data-toggle="tooltip" 
                   data-placement="center" 
                   title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                   onChange={(e) => setPassowrd1(e.target.value)} required/><br/>
          
            <label class="form-label">Repeat Password</label>
            <input type="password" 
                   title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                   onChange={(e) => setPassowrd2(e.target.value)}/><br/>
                  
            <button type="submit">
                Submit
            </button>
            <br/>
            <label >Not Registered? </label>
            <a href="/" >Sign In</a>
       
      </form>
    )
}

