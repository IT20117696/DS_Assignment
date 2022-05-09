const express = require("express");
const router = require("express").Router();
let customer = require("../models/customer");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const customerauth = require("../middleware/customerauth");

//customer signup
router.post("/customer/signup", async (req, res) => {
    try {
      const {
        customerName,
        phone,
        email,
        pwd
      } = req.body;

      let customer_a = await customer.findOne({ email });
      if (customer_a) {
        throw new Error("Customer already exists");
      }

      customer_a = {
        customerName : customerName,
        phone : phone,
        email: email,
        pwd: pwd
      };
    
      const newcustomer = new customer(customer_a);
      await newcustomer.save();
      const token = await newcustomer.generateAuthToken();
      res
        .status(201)
        .send({ status: "Customer Member Created", customer: newcustomer, token: token });
        console.log(customer_a);
    
      } catch (error) {
         console.log(error.message);
         res.status(500).send({error: error.message});
    }
  });


  module.exports = router;
