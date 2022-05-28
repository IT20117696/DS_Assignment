import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import {toast} from 'react-toastify';

const UpdateUserProfile = ({
    upadminName,
    upphone,
    upemail,
    show, 
    onHide
}) => {
    const [adminName, setadminName] = useState(upadminName);
    const [phone, setphone] = useState(upphone);
    const [email, setEmail] = useState(upemail);
    

    const updateAdminProfile = async (e) => {
      e.preventDefault()
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };

      const updateObject = {
        adminName: adminName,
        phone: phone,
        email: email
      }

      await axios.put('http://localhost:8070/api/admin/update', updateObject, config)
      .then((res) => {
        toast.success('Your details updated successfully',{position:toast.POSITION.TOP_CENTER});
        window.setTimeout(function() {
          window.location = "/admin/profile"
      }, 2000);
        
      })
      .catch((err) => {
        console.log(err)
        alert(err.message)
      })
    }

    return (
      <div >
      <Modal  show={show} onHide={onHide} animation={true} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
          <div style={{background: "#272E48"}}>
        <Modal.Header closeButton> 
          <Modal.Title style={{color: "white"}} id="contained-modal-title-vcenter" className="text-color" >Update My Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={updateAdminProfile} className="text-color" >  
            <div className="form-group row mb-3">

              <div className="col-sm-6">
                <small className="text-muted">Your Name</small>
                <input type="text" className="form-control form-control-user" Value={adminName}
                onChange={(e) => setadminName(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Your Phone Number</small>
                <input type="text" className="form-control form-control-user" Value={phone}
                onChange={(e) => setphone(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Email</small>
                <input type="text" className="form-control form-control-user" Value={email}
                onChange={(e) => setEmail(e.target.value)} required/>
              </div>
            </div>

            <br/> <br/>
 
            <center><Button variant="contained" style={{background: "#749ee3",color:"white", width: 50+"%"}} className="w-10" 
            startIcon={<SendIcon />} disableElevation type="submit">Update my details</Button></center>
          </form>
        </Modal.Body>
        </div>
      </Modal>
      </div>
    );
};

export default UpdateUserProfile;