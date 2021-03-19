const express = require("express");
const mongoose = require("mongoose");
const database = require("./src/config/database");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./src/routes"));

app.listen(3001);
