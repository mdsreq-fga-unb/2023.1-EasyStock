import mongoose from 'mongoose';
import productService from '../services/product.service.js';
import customerService from '../services/customer.service.js';

export const validId = (req, res, next) => { // Verifica se o ID do produto segue o padrão do mongo
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(400).send({ message: "ID inválido" });
        
        next();
    } catch (err) {
        res.status(500).send({ message: err.message });
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
        res.status(500).send({ message: err.message });
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
        res.status(500).send({ message: err.message });
    }
}