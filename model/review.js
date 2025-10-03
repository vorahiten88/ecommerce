// models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: [true ,"please enter productId"] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: [true ,"please enter userId"] },
  rating: { type: Number, min: 1, max: 5, required: [true ,"please enter rating"] },
  comment: String
});

module.exports = mongoose.model("Review", reviewSchema);
