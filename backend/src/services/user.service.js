const Product = require('../models/Product');

const create = (body) => Product.create(body);

module.exports = {
    create,
};