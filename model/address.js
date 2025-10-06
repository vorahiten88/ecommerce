// models/Address.js
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" 
  
  },
  street:{
    type : String,
    required : [true, "Please Enter your street"]
  },
  city: {
    type : String,
    required : [true, "Please Enter your city"]
  },
  state: {
    type : String,
    required : [true, "Please Enter your state"]
  },
  country: {
    type : String,
    required : [true, "Please Enter your country"]
  },
  pincode: {
    type : String,
    required : [true, "Please Enter your pincode"]
  },
  phone: {
    type : String,
    required : [true, "Please Enter your phone."]
  },
  isDefault: { type: Boolean, default: false }
});

module.exports = mongoose.model("Address", addressSchema);
