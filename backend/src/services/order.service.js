import Order from '../models/Order.js';
import mongoose from 'mongoose';

const createService = (body) => Order.create(body);

const findAllService = () => Order.find().populate('cliente', 'nome').sort({ 'dataPedido': -1 });

const findByIdService = (id) => 
Order.findById(id)
.populate('cliente', 'nome')
.populate({ 
    path: 'produtos',
    populate: 'produto' 
});

const findProductsInSales = () => 
Order.find()
.populate({
    path: 'produtos',
    select: 'quantidade', 
    populate: {
        path: 'produto',
        select: 'nome codigoPDV'
    } 
});

const deleteService = (id) => Order.findOneAndDelete({ _id: id });

export default {
    createService,
    findAllService,
    findProductsInSales,
    findByIdService,
    deleteService
}
