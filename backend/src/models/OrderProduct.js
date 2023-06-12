import mongoose from "mongoose";

const OrderProductSchema = new mongoose.Schema({
    quantidade: {
        type: Number,
        required: true
    },
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const OrderProduct = new mongoose.model('OrderProduct', OrderProductSchema);

export default OrderProduct;