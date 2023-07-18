import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderProduct',
        required: true
    }],
    precoTotal: {
        type: Number,
        required: true,
        default: 0
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    tipoPagamento: {
        type: String,
        enum: ['Crédito', 'Débito', 'PIX', 'Dinheiro', 'Fiado'],
        required: true
    },
    tipoEntrega: {
        type: String,
        enum: ['Sem Entrega', 'Loja', 'Aplicativo'],
        required: true
    },
    dataPedido: {
        type: String,
        required: true
    }
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;

/**
Order Example:

{
    "produtos" : [
        {
            "quantidade": 3,
            "produto" : "647bb0b9ddacf844afa2f215"
        },
        {
            "quantidade": 2,
            "produto" : "64753c65d9cfe673c981f7f9"
        }
    ],
    "cliente": "647cb54c4c68d2b2d7c6b2bd",
    "tipoPagamento": "PIX",
    "tipoEntrega": "Aplicativo"
}

 */