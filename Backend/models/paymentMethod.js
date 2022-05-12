const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
    paymentMethod:{
        type:String,
        required:true,
    },

});

const PaymentMethod = mongoose.model("PaymentMethod",paymentMethodSchema);
module.exports = PaymentMethod;
