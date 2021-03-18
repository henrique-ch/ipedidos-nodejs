const express = require("express");
const database = require("./src/config/database");

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo a iPedidos!");
});

app.listen(3001);
