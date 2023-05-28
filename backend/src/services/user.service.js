const Product = require('../models/Product');

const createService = (body) => Product.create(body);

const findAllService = () => Product.find();

module.exports = {
    createService,
    findAllService
};