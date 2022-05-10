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
        if(pwd1 == pwd2){
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
            
            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example8">Customer Name</label>
            <input type="text"  id="form3Example8" 
                   class="form-control form-control-lg" 
                   onChange={(e) => setcustomerName(e.target.value)} required/>
            </div>

            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example9">Phone Number</label>
            <input type="text" id="form3Example9"
                   class="form-control form-control-lg" 
                   onChange={(e) => setphone(e.target.value)}
                   pattern="[0-9]{10}" required />
            </div>

            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example8">Email Address</label>
            <input type="email" id="form3Example8" 
                    class="form-control form-control-lg"
                    pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                    inputMode="email"
                    onChange={(e) => setemail(e.target.value)} required/>
            </div>

            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example97">Password</label>
            <input type="password"  id="form3Example97" 
                   class="form-control form-control-lg" 
                   data-toggle="tooltip" 
                   data-placement="center" 
                   title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                   onChange={(e) => setPassowrd1(e.target.value)} required/>
            </div>

            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example97">Repeat Password</label>
            <input type="password"  id="form3Example97" 
                   class="form-control form-control-lg"  
                   title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                   onChange={(e) => setPassowrd2(e.target.value)}/>
            </div>

            <div class="d-flex justify-content-end pt-3">
            <button type="submit" class="btn btn-warning btn-lg ms-2">
                Submit
            </button>
            </div>

            <label class="label">Already Registered ?</label>
            <li class="signin-active">
            <a href='/' class="btn">Sign In</a></li>
      </form>
    )
}

