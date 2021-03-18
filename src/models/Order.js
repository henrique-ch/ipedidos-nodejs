const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  product: {
    type: Number,
    requerid: true,
  },
  value: {
    type: Number,
    requerid: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Order", OrderSchema);
