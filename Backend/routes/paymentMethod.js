const express = require('express');
const PaymentMethod = require('../models/paymentMethod');
const router = express.Router();

//add Payment method for cart
router.route('/paymentmethod/add').post((req,res)=>{
    let newpaymentMethod = new PaymentMethod(req.body);
    newpaymentMethod.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }return res.status(200).json({
            success : "Card Payment Method selection Successfully !!"
        });
    });
});


module.exports = router;
