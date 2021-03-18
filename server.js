const express = require("express");
const mongoose = require("mongoose");
const database = require("./src/config/database");

const app = express();

app.use("/", require("./src/routes"));

app.listen(3001);
