const mongoose = require("mongoose");
const requireDir = require("require-dir");

mongoose.connect("mongodb://localhost:27017/ipedidos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("../models");
