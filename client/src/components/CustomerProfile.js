import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieMainNavBar from './DashBoardLayOut/MovieMainNavBar';
import Footer from './footer';
import UpdateProfile from './CustomerUpdateProfile';
import CircularProgress from '@material-ui/core/CircularProgress';

toast.configure()

const CustomerProfile = () => {
    const [customerName, setcustomerName] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [pwd, setPassowrd] = useState("");

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

    //get user profile details   
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
                setShow(res.data.Cus.show)
                setLoading(false)
            
                 }).catch((error) => {
                    console.log(error.message)
                 })
             } catch (error) {
                   console.log(error.message)
            }
          }
          getUserData()
   }, [])

//update user profile
    const updateUserProfile = () => {
    setShow(true)
  }
  
//logout user profile
  const customerLogout = () => {
    if (window.confirm('Are you sure you wish to logout from this Account?')) {
        toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
        localStorage.removeItem('role')
        localStorage.removeItem('Authorization')
        window.location = "/"
      }
    }

 //delete user profile
 const deleteAccount = async () => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  if (window.confirm('Are you sure you wish to delete this Account?')) {
    await axios.delete('http://localhost:8070/api/customer/delete', config)
    .then((res) => {
     toast.success('Your account deleted successfuly',{position:toast.POSITION.TOP_CENTER});
      localStorage.removeItem('role')
      localStorage.removeItem('Authorization')
      window.location="/customer/signup"
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
 }  


if (loading) {
  return <div className="d-flex justify-content-center" 
    style={{ paddingTop: 400 }}>
  <CircularProgress hidden={false} />
   </div>
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
                      <img src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/avatar.png"  class="rounded-circle" width="180" height="180"/>
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
          <h6 class="mb-0"><b>Phone Number</b></h6>
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
              <center>
         <button onClick={updateUserProfile} class="btn btn-warning " href="" target="__blank">Edit Profile Details</button>&nbsp;&nbsp;&nbsp;
      <button style={{background: "#151B54", color:"#ffff"}} onClick={customerLogout} class="btn btn " target="__blank">Log Out</button>&nbsp;&nbsp;&nbsp;
        <button style={{background: "#9F000F", color:"#ffff"}} onClick={deleteAccount} class="btn btn " target="__blank">Delete</button></center>
            </div>
               </div><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                     </div>
                        </div>
                           </div>
                               </div>
          <UpdateProfile
                show={show}
                onHide={() => setShow(false)} 
                upcustomerName= {customerName}
                upphone = {phone}
                upemail= {email}
                uppwd= {pwd}           
              />
              </div>
          <Footer/>
      </div>
    )
  }

  export default CustomerProfile