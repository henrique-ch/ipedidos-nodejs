const mongoose = require("mongoose");
const { store } = require("./ProductController");
const Order = mongoose.model("Order");

module.exports = {
  async index(req, res) {
    const orders = await Order.find();

    return res.json(orders);
  },

  async store(req, res) {
    const order = await Order.create(req.body);

    return res.json(order);
  },
};
