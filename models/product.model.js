const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String,
    description: String,
    price: Number
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;