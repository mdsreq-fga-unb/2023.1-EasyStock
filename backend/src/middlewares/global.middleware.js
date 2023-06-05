import mongoose from 'mongoose';
import productService from '../services/product.service.js';
import customerService from '../services/customer.service.js';
import orderService from '../services/order.service.js';

export const validId = (req, res, next) => { // Verifica se o ID do produto segue o padrão do mongo
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(400).send({ message: "ID inválido" });
        
        next();
    } catch (err) {
        res.status(500).send({ middleware: err.message });
    }        
}

export const validProduct = async (req, res, next) => { // Verifica se o produto existe no banco
    try {
        const id = req.params.id;

        const product = await productService.findByIdService(id);

        if (!product)
            return res.status(400).send({ message: "Produto não encontrado" });

        req.id = id;
        req.product = product;    

        next();
    } catch (err) {
        res.status(500).send({ middleware: err.message });
    }         
}

export const validCustomer = async (req, res, next) => {
    try {
        const id = req.params.id;

        const customer = await customerService.findByIdService(id);

        if (!customer)
            return res.status(400).send({ message: "Cliente não encontrado" });
            
        req.id = id;
        req.customer = customer;
        
        next();
    } catch (err) {
        res.status(500).send({ middleware: err.message });
    }
}

export const validOrder = async (req, res, next) => {
    try {
        const id = req.params.id;

        const order = await orderService.findByIdService(id);

        if (!order)
            return res.status(400).send({ message: "Pedido não encontrado" });
            
        req.id = id;
        req.order = order;
        
        next();
    } catch (err) {
        res.status(500).send({ middleware: err.message });
    }
}

export const validOrderProduct = async (req, res, next) => {
    try {
        let qtdExcedida = false;
        let produtoForaEstoque = false;

        const produtos = req.body.produtos;
        const orderProductsIds = Promise.all(req.body.produtos.map(async (orderProduct) => {
            const produto = await productService.findByIdService(orderProduct.produto);

            if (!produto)
                produtoForaEstoque = true;
            else if (orderProduct.quantidade > produto.qtdEstoque)
                qtdExcedida = true;
        }));

        await orderProductsIds;

        if (produtoForaEstoque)
            return res.status(400).send({ middleware: "Produto não encontrado" });

        if (qtdExcedida)
            return res.status(400).send({ middleware: 'Quantidade indisponível para compra' });

        req.produtos = produtos;    
        next();
    } catch (err) {
        res.status(500).send({ middleware: err.message });
    }
}