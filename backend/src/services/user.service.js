const Product = require('../models/Product');

const createService = (body) => Product.create(body);

const findAllService = () => Product.find();

const findByIdService = (id) => Product.findById(id);

module.exports = {
    createService,
    findAllService,
    findByIdService
};