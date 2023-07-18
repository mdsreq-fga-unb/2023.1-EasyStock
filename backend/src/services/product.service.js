import Product from '../models/Product.js';

// Funções que acessam o banco de dados para criação, leitura, atualização e exclusão
const createService = (body) => Product.create(body);

const findAllService = () => Product.find();

const searchByName = (nome) => Product.find({
    nome: { $regex: `${nome || ""}`, $options: "i" }
});

const findByPdvService = (pdv) => Product.findOne({ codigoPDV: pdv });

const findByIdService = (id) => Product.findById(id);

const updateService = (
    codigoPDV,
    nome,
    precoCusto,
    precoVenda,
    qtdEstoque,
    qtdEstoqueMin,
    medida,
    statusVenda
) => Product.findOneAndUpdate(
    { codigoPDV: codigoPDV },
    { nome, precoCusto, precoVenda, qtdEstoque, qtdEstoqueMin, medida, statusVenda }
)

const updateAfterOrder = (
    id,
    qtdEstoque,
    statusVenda
) => Product.findOneAndUpdate(
    { _id: id },
    { qtdEstoque, statusVenda }
)

const deleteService = (pdv) => Product.findOneAndDelete({ codigoPDV: pdv });

export default {
    createService,
    findAllService,
    searchByName,
    findByPdvService,
    findByIdService,
    updateService,
    updateAfterOrder,
    deleteService
}