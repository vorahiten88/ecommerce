const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productname: String,
  price: Number,
  stock: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
});

module.exports = mongoose.model("Product", productSchema);
