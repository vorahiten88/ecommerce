
const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: [true, "please enter user"] 
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "please enter products"] 
      }
    ]
  }

);

module.exports = mongoose.model("Wishlist", wishlistSchema);
