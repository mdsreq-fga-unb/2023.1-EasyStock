import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    precoCusto: {
        type: Number,
        required: true,
        //talvez impede que o valor de venda seja maior
        validate: {
            validator: function (value) {
                return value <= this.precoVenda;
            },
            message: 'O preço de custo não pode ser maior que o preço de venda.'
        }
    },
    precoVenda: {
        type: Number,
        required: true,
    },
    qtdEstoque: {
        type: Number,
        required: true,
    },
    qtdEstoqueMin: {
        type: Number,
        required: true
    },
    codigoPDV: {
        type: Number,
        required: true,
        unique: true
    },
    medida: {
        type: String,
        enum: ['KG', 'UN'],
        required: true
    },
    statusVenda: {
        type: Boolean,
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;