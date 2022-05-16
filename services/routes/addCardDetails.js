const express = require ('express');
const router = express.Router();
const AddCardDetails = require('../models/cardDetails');

//Add card details 
router.route('/carddetails/add').post((req,res)=>{
    let newCardDetails = new AddCardDetails(req.body);
    newCardDetails.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "Card Details Added Successfully!!!"
        });
    });  
});

module.exports = router;

