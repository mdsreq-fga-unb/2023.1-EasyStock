import Product from '../models/Product.js';

// Funções que acessam o banco de dados para criação, leitura, atualização e exclusão
const createService = (body) => Product.create(body);

const findAllService = () => Product.find();

const searchByName = (nome) => Product.find({
    nome: { $regex: `${nome || ""}`, $options: "i" }
});

const findByPdvService = (pdv) => Product.findOne({ codigoPDV: pdv });

const updateService = (
    id,
    nome,
    precoCusto,
    precoVenda,
    qtdEstoque,
    qtdEstoqueMin,
    medida,
    statusVenda
) => Product.findOneAndUpdate(
    { _id: id },
    { nome, precoCusto, precoVenda, qtdEstoque, qtdEstoqueMin, medida, statusVenda }
)

const deleteService = (id) => Product.findOneAndDelete({ _id: id });

export default {
    createService,
    findAllService,
    searchByName,
    findByPdvService,
    updateService,
    deleteService
}