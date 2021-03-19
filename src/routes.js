const express = require("express");

const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ClientController = require("./controllers/ClientController");
const OrderController = require("./controllers/OrderController");

//Pagina Inicial
routes.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//rptas produtos
routes.get("/products", ProductController.index);
routes.post("/product", ProductController.store);

//rotas clientes
routes.get("/clients", ClientController.index);
routes.post("/client", ClientController.create);

//rotas pedidos
routes.get("/orders", OrderController.index);
routes.post("/order", OrderController.store);

module.exports = routes;
