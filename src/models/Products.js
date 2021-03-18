const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    requerid: true,
  },
});

mongoose.model("Product", ProductSchema);
