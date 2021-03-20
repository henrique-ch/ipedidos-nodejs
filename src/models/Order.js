const mongoose = require("mongoose");
const Float = require("mongoose-float").loadType(mongoose);

const OrderSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  value: {
    type: Float,
    required: true,
  },
  amount: {
    type: Float,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Order", OrderSchema);
