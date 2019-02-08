const md_product = require('../../models/product.model');

module.exports.list = async function (req, res) {
    var products = await md_product.find();
    res.json(products);
};

module.exports.create = async function (req, res) {
    var product = await md_product.create(req.body);
    res.json(product);
};
