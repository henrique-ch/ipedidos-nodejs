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
routes.get("/src/views/Products.html", function (req, res) {
  res.sendFile(__dirname + "/views/Products.html");
});
routes.get("/listproducts", ProductController.index);
routes.post("/src/views/Products.html/product", ProductController.store);

//rotas clientes
routes.get("/src/views/Clients.html", function (req, res) {
  res.sendFile(__dirname + "/views/Clients.html");
});
routes.get("/listclients", ClientController.index);
routes.post("/src/views/Clients.html/client", ClientController.store);

//rotas pedidos
routes.get("/src/views/Orders.html", function (req, res) {
  res.sendFile(__dirname + "/views/Orders.html");
});
routes.get("/listorders", OrderController.index);
routes.post("//src/views/Orders.html/order", OrderController.store);

module.exports = routes;
