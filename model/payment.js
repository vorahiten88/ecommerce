// models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: [true , "please enter orderId"] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: [true , "please enter user"] },
  method: { type: String, enum: ["COD", "CreditCard", "UPI"], default: "COD" },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  
});

module.exports = mongoose.model("Payment", paymentSchema);
