const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productname: {
    type : String,
    required : [true , "please enter productname"]
  },
  price: {
    type : Number,
    required : [true , "please enter price"]
  },
  stock: {
    type : Number,
    required : [true , "please enter stock"]
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category",
      required : [true , "please enter categoryId"]
   }
});

module.exports = mongoose.model("Product", productSchema);
