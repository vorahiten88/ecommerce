const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryname: { type: String, required: [true ,"please enter categoryname"] }
});

module.exports = mongoose.model("Category", categorySchema);

