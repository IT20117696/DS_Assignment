import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieMainNavBar from './DashBoardLayOut/MovieMainNavBar';
import Button from "@material-ui/core/Button";
import Footer from './footer';

toast.configure()

const CustomerProfile = () => {
    const [customerName, setcustomerName] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [pwd, setPassowrd] = useState("");

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getUserData = async () => {
            try {
               const config = {
                headers: {
                    Authorization: localStorage.getItem("Authorization")
                 },
              }
              await axios.get("http://localhost:8070/api/customer/profile", config)
              .then((res) => {
                setcustomerName(res.data.Cus.customerName)
                setphone(res.data.Cus.phone)
                setemail(res.data.Cus.email)
                setPassowrd(res.data.Cus.pwd)
            
            }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
   }, [])

    const updateUserProfile = () => {
    setShow(true)
  }
  
  const customerLogout = () => {
    if (window.confirm('Are you sure you wish to logout from this Account?')) {
        toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
        localStorage.removeItem('role')
        localStorage.removeItem('Authorization')
        // window.location = "/"
      }
    }
  
     return (
        <div class="bod" style={{background:"#E3E4FA"}}  >
          <MovieMainNavBar/>
            <br/><br/> <br/><br/> <br/><br/>
              <div class="container">
            <div class="main-bod" >
          <div class="row gutters-sm" >
            <div class="col-md-4 mb-3">
              <div class="cardd" >
                <div class="cardd-body" >
                  <div class="d-flex flex-column align-items-center text-center" >
                      <img src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/avatar.png" alt="Admin" id = "profileimg" class="rounded-circle" width="180" height="180"/>
                    <div class="mt-3">
                      <h2><b>{customerName}</b></h2>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="cardd mb-3">
                  <div class="cardd-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0"><b>Full Name</b></h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      <b>{customerName}</b>
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                      <h6 class="mb-0"><b>Phone</b></h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       <b>{phone}</b>
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0"><b>Email</b></h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       <b>{email}</b>
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-12"><br/>
                      <center><button onClick={updateUserProfile} class="btn btn-warning " target="__blank">Edit Profile Details</button>&nbsp;&nbsp;&nbsp;
                      <button style={{background: "#9F000F", color:"#ffff"}} onClick={customerLogout} class="btn btn " target="__blank">Log Out</button></center>
                      </div>
                    </div><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <CustomerUpdateProfile
                upcustomerName= {customerName}
                upphone = {phone}
                upemail = {email}
                uppwd= {pwd}
                show={show}
                onHide={() => setShow(false)} /> */}
              </div>
              <Footer/>
  </div>
    )
  }

  export default CustomerProfile