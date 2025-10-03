// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
     type: String,
     required: [true, 'Please enter your Emailid'],
     unique: [true,'Email already exists. Please use a different one.']
     
    },
  mobile : { 
  type: Number,
  required: [true,"Please Enter your mobile no"]
 },
  password: { 
  type: String,
  required: [true,"Please Enter your password"]
 },
 
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
});

module.exports = mongoose.model("User", userSchema);
