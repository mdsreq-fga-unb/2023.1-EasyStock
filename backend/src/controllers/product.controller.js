const productService = require('../services/user.service');

const create = async (req, res) => {
    const { nome, precoCusto, precoVenda, qtdEstoque, codigoPDV, statusVenda } = req.body;

    if (!nome || !precoCusto || !precoVenda || !qtdEstoque || !codigoPDV || !statusVenda)
        res.status(400).send({message: "Preencha todos os campos para realizar o cadastro"});

    const product = await productService.create(req.body);

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
}

module.exports = { create }