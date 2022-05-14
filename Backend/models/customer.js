const mongoose = require ('mongoose');
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const customerSchema = new mongoose.Schema({
    
     customerName :{
        type : String,
        required : true
    
      },
    
      phone: {
        type: String,
        required: true,
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
   
    pwd: {
        type: String,
        required: true,
        trim: true,
    },
    
    tokens: [
        {
        token: {
            type: String,
            required: true,
        },
        },
    ],   
},  {timestamps:true});

// @Action - encrypt the password
customerSchema.pre('save', async function(next){
    if(!this.isModified("pwd")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pwd = await bcrypt.hash(this.pwd, salt);
  });


// @Action - Get auth token
customerSchema.methods.generateAuthToken = async function () {
    const customer = this;
    const token = jwt.sign({ _id: customer._id }, "jwtSecret");
    customer.tokens = customer.tokens.concat({ token });
    await customer.save();
    return token;
};

// @Action - Find customer by credentials
customerSchema.statics.findByCredentials = async (email, pwd) => {
    const customer1 = await customer.findOne({ email });
    if (!customer1) {
      throw new Error("Please enter authorized Customer Email");
    }
    const isMatch = await bcrypt.compare(pwd, customer1.pwd);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return customer1;
    };

 const customer = mongoose.model("customer", customerSchema);
 module.exports = customer;  