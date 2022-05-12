const mongoose = require('mongoose');

const addCardDetailsSchema = new mongoose.Schema({
    cardNumber:{
        type:number,
        required:true,
    },
    cardHolderName:{
        type:String,
        required:true,
    },
    cvv:{
        type:number,
        required:true,
    },
    expirationMonth:{
        type:String,
        required:true,
    },
    expirationYear:{
        type:number,
        required:true,
    },

});

const AddCardDetails = mongoose.model("Card Details",addCardDetailsSchema);
module.exports = AddCardDetails;