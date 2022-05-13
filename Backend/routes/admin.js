const express = require("express");
const router = require("express").Router();
let admin = require("../models/admin");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//admin signup
router.post("/admin/signup", async (req, res) => {
    try {
        const {
          adminName,
          phone,
          email,
          pwd
        } = req.body;
    
    let admin_a = await admin.findOne({ email });
        if (admin_a) {
          throw new Error("Admin already exists");
        }      
        admin_a = {
            adminName : adminName,
            phone : phone,
            email: email,
            pwd: pwd
          };    

     const newadmin = new admin(admin_a);
      await newadmin.save();
        const token = await newadmin.generateAuthToken();
          res
            .status(201)
            .send({ status: "Admin Member Created", admin: newadmin, token: token });
            console.log(admin_a);
        
          } catch (error) {
             console.log(error.message);
             res.status(500).send({error: error.message});
        }
      });      

//admin login 
router.post('/admin/signin', async (req, res) => { 
    try {
        const {email, pwd} = req.body     
        const Admin = await admin.findByCredentials(email, pwd)
        const token = await Admin.generateAuthToken()
        res.status(200).send({token: token, Admin: Admin})
    
    } catch (error) {
        res.status(500).send({ error: error.message });
        console.log(error);
      }
    });
        
 module.exports = router;
    