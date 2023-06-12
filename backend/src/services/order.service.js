import Order from '../models/Order.js';

const createService = (body) => Order.create(body);

const findAllService = () => Order.find().sort({ 'dataPedido': -1 });

const findByIdService = (id) => 
Order.findById(id)
.populate({ 
    path: 'produtos', 
    populate: 'produto' 
});

const updateService = (
    id,
    statusPedido
) => Order.findOneAndUpdate(
    { _id: id },
    { statusPedido }
)

const deleteService = (id) => Order.findOneAndDelete({ _id: id });

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
    deleteService
}