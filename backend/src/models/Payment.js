import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
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
    dataVenda: {
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;