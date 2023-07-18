import customerService from "../services/customer.service.js";
import { validateEmail } from "./auth.controller.js";

const createCustomer = async (req, res) => { // Cadastro de um cliente
    try {
        const { nome, divida, email } = req.body;

        if (!nome)
            return res.status(400).send({ message: 'Informe o nome do cliente!' });

        if (divida < 0 || divida >= 1000)
            return res.status(400).send({ message: 'A dívida deve ser um valor entre R$ 0 e R$ 999!' });    

        if (email) {
            const valEmail = validateEmail(email);
            if (!valEmail)
                return res.status(400).send({ message: 'Formato de email inválido!' }); 
        }

        const customer = await customerService.createService(req.body);

        if (!customer)
            return res.status(400).send({ message: 'Erro no cadastro do cliente!' }); 

        res.status(201).send({
            customer,
            message: 'Cliente cadastrado com sucesso!'
        });    

    } catch (err) {
        res.status(500).send({ customerController: err.message });
    }
}

const findAllCustomers = async (req, res) => { // Listagem de todos os clientes cadastrados
    try {
        const customers = await customerService.findAllService();

        if (customers.length === 0)
            return res.status(400).send({ message: "Não há clientes cadastrados!" });
        
        res.send(customers);    
    } catch (err) {
        res.status(500).send({ customerController: err.message });
    }
}

const findCustomerById = async (req, res) => { // Busca de um cliente específico pelo ID
    try {
        const customer = req.customer;

        res.send(customer);
    } catch (err) {
        res.status(500).send({ customerController: err.message });
    }
}

const updateCustomer = async (req, res) => { // Atualiza os campos do cliente
    try {
        const { nome, telefone, email, divida } = req.body;

        if (!nome && !telefone && !email && !divida)
            return res.status(400).send({message: "Preencha pelo menos um campo para atualização!"});

        if (divida < 0 || divida >= 1000)
            return res.status(400).send({ message: 'A dívida deve ser um valor entre R$ 0 e R$ 999!' });    

        if (email) {
            const valEmail = validateEmail(email);
            if (!valEmail)
                return res.status(400).send({ message: 'Formato de email inválido!' }); 
        }

        const { id } = req;

        await customerService.updateService(
            id,
            nome,
            telefone,
            email,
            divida
        );

        res.send({ message: 'Cliente atualizado com sucesso' });    
    } catch (err) {
        res.status(500).send({ customerController: err.message });
    }
}

const deleteCustomer = async (req, res) => { // Deleta um cliente
    try {
        const { id } = req;

        await customerService.deleteService(id);

        res.send({ message: 'Cliente deletado com sucesso' });
    } catch (err) {
        res.status(500).send({ customerController: err.message });
    }
}

export default { createCustomer, findAllCustomers, findCustomerById, updateCustomer, deleteCustomer }