const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    res.json(product);

    new Product(product)
      .save()
      .then(() => {
        console.send("Produto salvo com sucesso!");
      })
      .catch((err) => {
        console.log("Erro ao salvar produto!");
      });
  },
};
