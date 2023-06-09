import Payment from "../models/Payment.js";

const createService = (body) => Payment.create(body);

const findAllService = () => Payment.find().populate('cliente', 'nome').sort({ 'dataVenda': -1 });

const findByIdService = (id) => 
Payment.findById(id)
.populate('cliente', 'nome')
.populate('pedido');

const deleteService = (id) => Payment.findOneAndDelete({ _id: id });

export default {
    createService,
    findAllService,
    findByIdService,
    deleteService
}