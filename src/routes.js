const express = require("express");

const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ClientController = require("./controllers/ClientController");
const OrderController = require("./controllers/OrderController");

routes.get("/products", ProductController.index);
routes.post("/product", ProductController.store);

routes.get("/clients", ClientController.index);
routes.post("/client", ClientController.create);

routes.get("/orders", OrderController.index);
routes.post("/order", OrderController.store);

module.exports = routes;
