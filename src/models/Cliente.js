const mongoose = require("mongoose");
const Float = require("mongoose-float").loadType(mongoose);

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fone: {
    type: Number,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  sit: {
    type: Boolean,
    default: true,
  },
});

mongoose.model("Client", ClientSchema);
