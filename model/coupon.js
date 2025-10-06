// models/Coupon.js
const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: { type: String, unique: [true,"please enter unique coupon"],
     required: [true,'please enter code']
    },
  discountType: { type: String, enum: ["percentage", "fixed"], default: "percentage" },
  discountValue: { type: Number, 
    required: [true,'please enter discountValue']
  },
  expiryDate: { type: Date, default : Date.now,
 
 },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("Coupon", couponSchema);
