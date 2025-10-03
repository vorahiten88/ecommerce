// models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  method: { type: String, enum: ["COD", "CreditCard", "UPI"], default: "COD" },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  transactionId: String
});

module.exports = mongoose.model("Payment", paymentSchema);
