const mongoose = require("mongoose");
const Float = require("mongoose-float").loadType(mongoose);

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Float,
    required: true,
  },
});

mongoose.model("Product", ProductSchema);
