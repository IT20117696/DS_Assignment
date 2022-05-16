const express = require("express");
const router = require("express").Router();
let admin = require("../models/admin");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/Admin/auth");

//admin signup
router.post("/admin/signup", async (req, res) => {
    try {
        const {
          adminName,
          phone,
          email,
          pwd
        } = req.body;
    
    let admin1 = await admin.findOne({ email });
        if (admin1) {
          throw new Error("Admin already exists");
        }      
        admin1 = {
            adminName : adminName,
            phone : phone,
            email: email,
            pwd: pwd
          };    

     const newadmin = new admin(admin1);
      await newadmin.save();
        const token = await newadmin.generateAuthToken();
          res
            .status(201)
            .send({ status: "Admin Member Created", admin: newadmin, token: token });
            console.log(admin1);
        
          } catch (error) {
             console.log(error.message);
             res.status(500).send({error: error.message});
        }
      });      

//admin login 
router.post('/admin/signin', async (req, res) => { 
    try {
        const {email, pwd} = req.body     
        const Adm = await admin.findByCredentials(email, pwd) //adm = admin
        const token = await Adm.generateAuthToken()
        res.status(200).send({token: token, Adm: Adm})
    
    } catch (error) {
        res.status(500).send({ error: error.message });
        console.log(error);
      }
    });

//get admin profile
router.get("/admin/profile", auth, async (req, res) => {
  try {
    res.status(201)
    res.send({ success: "Admin Logged In", Adm: req.Adm});
  } 
    catch (error) {
    res.status(500)
    res.send({ status: "Error with profile", error: error.message });
  }
});  

  //log out profile
  router.post("/admin/logout", auth, async (req, res) => {
    try {
      req.Adm.tokens = req.Adm.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.Adm.save();
      res.status(200).send("Logout successfully");
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }   
 });

//update admin profile
router.put('/admin/update', auth, async (req, res) => {
  try {
    const {
        adminName,
        phone,
        email,
      } = req.body;

    let Adm = await admin.findOne({email})
      
    if (!Adm) {
        throw new Error('There is no admin account')
      }

      const adminUpdate = await admin.findByIdAndUpdate(req.Adm.id, 
        {
          adminName:adminName,
          phone:phone,
          email:email
        })

        res.status(200).send({status: 'Admin Profile Updated', Adm: adminUpdate})

      } catch (error) {
        res.status(500).send({error: error.message})
        console.log(error)
      }
    });

    //delete admin account
    router.delete("/admin/delete", auth, async (req, res) => {
      try {
        const Adm = await admin.findById(req.Adm.id);
        if (!Adm) {
          throw new Error("There is no admin to delete");
        }
        const deleteProfile = await admin.findByIdAndDelete(req.Adm.id);
        res.status(200).send({ status: "Admin deleted", Adm: deleteProfile });
      } catch (error) {
        res
          .status(500)
          .send({ status: "error with /delete/:id", error: error.message });
      }
    });
    
        
 module.exports = router;
    