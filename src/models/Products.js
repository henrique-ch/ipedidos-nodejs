const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    requerid: true,
  },
});

mongoose.model("Product", ProductSchema);
