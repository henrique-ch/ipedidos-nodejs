const express = require("express");

const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ClientController = require("./controllers/ClientController");
const OrderController = require("./controllers/OrderController");

routes.get("/products", ProductController.index);
routes.get("/client", ClientController.index);
routes.get("/orders", OrderController.index);

module.exports = routes;
