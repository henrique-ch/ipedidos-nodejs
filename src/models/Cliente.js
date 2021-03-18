const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fone: {
    type: Number,
    requerid: true,
  },
  birth_date: {
    type: Number,
    requerid: true,
  },
});

mongoose.model("Client", ClientSchema);
