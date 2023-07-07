import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    },
    divida: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;