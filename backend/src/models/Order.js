import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderProduct',
        required: true
    }],
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    precoTotal: {
        type: Number,
        required: true,
        default: 0
    },
    statusPedido: {
        type: String,
        required: true,
        default: 'Em andamento...'
    },
    dataPedido: {
        type: Date,
        default: Date.now
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
    "cliente": "647cb54c4c68d2b2d7c6b2bd"
}

 */