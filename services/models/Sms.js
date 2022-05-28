const mongoose = require ('mongoose');


const smsSchema = new mongoose.Schema({

    phonenumber:{
        type:String,
       
    },



})

const SMS = mongoose.model("SendSMS",smsSchema);
module.exports = SMS;
