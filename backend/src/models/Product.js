const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    precoCusto: {
        type: Number,
        required: true
    },
    precoVenda: {
        type: Number,
        required: true,
    },
    qtdEstoque: {
        type: Number,
        required: true,
    },
    codigoPDV: {
        type: Number,
        required: true,
        unique: true
    },
    statusVenda: {
        type: Boolean,
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;