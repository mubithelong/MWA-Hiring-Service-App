const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String },
  dateOfBirth: { type: String },
  gender: { type: String },
  address: { type: String },
});

Schema.methods.hashPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10);
  //   console.log("entering here");
  //   console.log(password);
  //   console.log(salt);
  return await bcrypt.hashSync(password, salt);
};

Schema.methods.compareUserPassword = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

Schema.methods.genertareJwtToken = async (payload, secret, expires) => {
  return jwt.sign(payload, secret, expires);
};

module.exports = mongoose.model("User", Schema);
