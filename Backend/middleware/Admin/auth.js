const jwt = require("jsonwebtoken");
const config = require("config");
const admin = require('../../models/admin');

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decode = jwt.verify(token, "jwtSecret");   //Adm = admin
    const Adm = await admin.findOne({ _id: decode._id, "tokens.token": token });
    if (!Adm) {
      throw new Error("Please Authenticated");
    }

    req.token = token;
    req.Adm = Adm;
    next();
    
  } catch (error) {
    res.status(401).send({ message: error.message });
    console.log("Error in auth.js middleware ", error.message);
  }
};

module.exports = auth;
