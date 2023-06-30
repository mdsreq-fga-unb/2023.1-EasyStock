import Order from '../models/Order.js';

const createService = (body) => Order.create(body);

const findAllService = () => Order.find().populate('cliente', 'nome').sort({ 'dataPedido': -1 });

const findByIdService = (id) => 
Order.findById(id)
.populate('cliente', 'nome')
.populate({ 
    path: 'produtos', 
    populate: 'produto' 
});

const deleteService = (id) => Order.findOneAndDelete({ _id: id });

export default {
    createService,
    findAllService,
    findByIdService,
    deleteService
}