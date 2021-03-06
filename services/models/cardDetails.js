const mongoose = require('mongoose');
const addCardDetailsSchema = new mongoose.Schema({
    
    cardMethod:{
        type:String,
        required:true,
    },

    cardNumber:{
        maxlength: 16,
        type:Number,
        required:true,
    },

    cardHolderName:{
        type:String,
        required:true,
    },

    cvv:{
        maxlength: 3,
        type:Number,
        required:true,
    },

    expirationMonth:{
        type:String,
        required:true,
    },
    
    expirationYear:{
        type:Number,
        required:true,
    },
    totalAmount:{
        type:String,
        required:true,
    },
});

const AddCardDetails = mongoose.model("Card Details",addCardDetailsSchema);
module.exports = AddCardDetails;