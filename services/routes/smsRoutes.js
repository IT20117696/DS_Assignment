
const Sms = require('../models/Sms');

const express = require("express");
const router = express.Router();
var ShoutoutClient = require("shoutout-sdk");
var debug = true,
  verifySSL = true;
  var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYTQ3OWNmMC1kZWExLTExZWMtOTZmNy1lMzY5MDYwNmUxZDciLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY1Mzc1NDcyNywiZXhwIjoxOTY5MzczOTI3LCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjY4MzYzIiwic29fdXNlcl9yb2xlIjoidXNlciIsInNvX3Byb2ZpbGUiOiJhbGwiLCJzb191c2VyX25hbWUiOiIiLCJzb19hcGlrZXkiOiJub25lIn0.5Dy_0xr-Wbg1UmEd2s0tNKoSIQbz2IiCv9knbpS9ODQ';



  router.post("/sms", async(req, res) => {
  
    const {phonenumber} = req.body
    const newUser = new Sms({phonenumber})

    var client = new ShoutoutClient(apiKey, debug, verifySSL);
    var message = {
      content: { sms: "Hello Your Resevation is  Successfull..!" },
      destinations: ["94715607361"],
      source: "ShoutDEMO",
      transports: ["SMS"],
    };

    try {
        newUser.save()
        res.send('User Registered successfully')
        client.sendMessage(message, (error, result) => {
          if (error) {
            console.error("Error sending message!", error);
          } else {
            console.log("Sending message successful!", result);
          }
        });
    } catch (error) {
         return res.status(400).json({ message: error });
    }

    

});


module.exports = router;