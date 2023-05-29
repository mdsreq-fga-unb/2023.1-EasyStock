import Product from '../models/Product.js';

const createService = (body) => Product.create(body);

const findAllService = () => Product.find();

const findByIdService = (id) => Product.findById(id);

const updateService = (
    id,
    nome,
    precoCusto,
    precoVenda,
    qtdEstoque,
    statusVenda
) => Product.findOneAndUpdate(
    { _id: id },
    { nome, precoCusto, precoVenda, qtdEstoque, statusVenda }
)

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
}