const mongoose = require('mongoose');
const addCardDetailsSchema = new mongoose.Schema({
    
    cardMethod:{
        type:String,
        required:true,
    },

    cardNumber:{
        type:Number,
        required:true,
    },

    cardHolderName:{
        type:String,
        required:true,
    },

    cvv:{
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
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Please enter valid Email address");
          }
        },
    },
});

const AddCardDetails = mongoose.model("Card Details",addCardDetailsSchema);
module.exports = AddCardDetails;