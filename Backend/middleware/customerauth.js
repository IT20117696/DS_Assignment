const jwt = require("jsonwebtoken");
const config = require("config");
const customer = require("../models/customer");

const customerauth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decode = jwt.verify(token, "jwtSecret");
    const Customer = await customer.findOne({
      _id: decode._id,
      "tokens.token": token,
    });
    if (!Customer) {
      throw new Error("Please Authenticate");
    }
    req.token = token;
    req.Customer = Customer;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
    console.log("Error in auth.js middleware ", error.message);
  }
};

module.exports = customerauth;
