const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    required: [true, 'enter user']
  },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  totalAmount: {
    type: Number,
    required: [true, 'enter totalamount']
  },

  status: {
    type: String, enum: ["pending", "shipped", "delivered"], default: "pending",

  }
});

module.exports = mongoose.model("Order", orderSchema);
