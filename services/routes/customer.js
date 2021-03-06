const express = require("express");
const router = require("express").Router();
let customer = require("../models/customer");
const validator= require("validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");

//customer signup
router.post("/customer/signup",  async (req, res) => {
    try {
      const {
        customerName,
        phone,
        email,
        pwd
      } = req.body;

      let customer1 = await customer.findOne({ email });
      if (customer1) {
        throw new Error("Customer already exists");
      }

      customer1 = {
        customerName : customerName,
        phone : phone,
        email: email,
        pwd: pwd
      };
    
      const newcustomer = new customer(customer1);
      await newcustomer.save();
      const token = await newcustomer.generateAuthToken()
      res.status(201).send({ status: "Customer Member Created", customer: newcustomer, token: token });
     
      console.log(customer1);
    
      } catch (error) {
         console.log(error.message);
         res.status(500).send({error: error.message});
        //  console.log(error)
    }
  });

  //customer login
  router.post('/customer/signin', async (req, res) => {
    try {
      const {email, pwd} = req.body
      const Cus = await customer.findByCredentials(email, pwd)
      const token = await Cus.generateAuthToken()
      res.status(200).send({token: token, Cus: Cus})
  
    } catch (error) {
      res.status(500).send({ error: error.message });
      console.log(error);
    }
  });

  //get customer profile
  router.get("/customer/profile", auth, async (req, res) => {
    try {
      res.status(201)
      res.send({ success: "Customer Logged In", Cus: req.Cus });
    } 
      catch (error) {
      res.status(500)
      res.send({ status: "Error with profile", error: error.message });
    }
  });

  //log out profile
  router.post("/customer/logout", auth, async (req, res) => {
    try {
      req.Cus.tokens = req.Cus.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.Cus.save();
      res.status(200).send("Logout successfully");
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }   
 });

 // update customer profile
 router.put('/customer/update', auth, async (req, res) => {
  try {
    const {
        customerName,
        phone,
        email,
      } = req.body;

    let Cus = await customer.findOne({email})
      
    if (!Cus) {
        throw new Error('There is no customer account')
      }

      const customerUpdate = await customer.findByIdAndUpdate(req.Cus.id, 
        {
          customerName:customerName,
          phone:phone,
          email:email
        })

        res.status(200).send({status: 'Customer Profile Updated', Cus: customerUpdate})

      } catch (error) {
        res.status(500).send({error: error.message})
        console.log(error)
      }
    });

 
    //delete customer account
    router.delete("/customer/delete", auth, async (req, res) => {
      try {
        const Cus = await customer.findById(req.Cus.id);
        if (!Cus) {
          throw new Error("There is no customer to delete");
        }
        const deleteProfile = await customer.findByIdAndDelete(req.Cus.id);
        res.status(200).send({ status: "Customer deleted", Cus: deleteProfile });
      } catch (error) {
        res
          .status(500)
          .send({ status: "error with /delete/:id", error: error.message });
      }
    });
    

  module.exports = router;
