const productService = require('../services/user.service');
const counterService = require('../models/CounterTable');
const mongoose = require('mongoose');

const create = async (req, res) => { // Cadastro de um produto
    await counterService.findOneAndUpdate(
        { id: "autoinc" },
        { "$inc":{ "seq":1 } },
        { new:true }
    ).then(async (cd) => {
        let seqId;
    
        if (cd == null) { // Auto increment para codigoPDV
            const newinc = new counterService({ id: "autoinc", seq:1 });
            newinc.save();
            seqId = 1;
        } else {
            seqId = cd.seq;
        }

        const { nome, precoCusto, precoVenda, qtdEstoque, statusVenda } = req.body;

        if (!nome || !precoCusto || !precoVenda || !qtdEstoque || !statusVenda)
            res.status(400).send({message: "Preencha todos os campos para realizar o cadastro"});

        codigoPDV = seqId;
            
        const product = await productService.createService({ nome, precoCusto, precoVenda, qtdEstoque, codigoPDV, statusVenda });

        if (!product)
            return res.status(400).send({ message: "Erro na criação do produto" });

        res.status(201).send({
            product: {
                id: product._id,
                nome,
                precoCusto,
                precoVenda,
                qtdEstoque,
                statusVenda,
                codigoPDV
            },
            message: "Produto cadastrado com sucesso!"
        });

    });

}

const findAll = async (req, res) => { // Listagem de todos os produtos cadastrados
    const products = await productService.findAllService();

    if (products.length === 0)
        return res.status(400).send({ message: "Não há produtos cadastrados" });

    res.send(products);
}

const findById = async (req, res) => { // Busca de um produto específico pelo ID
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).send({ message: "ID inválido" });

    const product = await productService.findByIdService(id);
    
    if (!product)
        return res.status(400).send({ message: "Produto não encontrado" });

    res.send(product);    
}

module.exports = { create, findAll, findById }