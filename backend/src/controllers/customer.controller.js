import customerService from "../services/customer.service.js";

const createCustomer = async (req, res) => {
    try {
        const { nome } = req.body;

        if (!nome)
            return res.status(400).send({ message: 'Informe o nome do cliente' });

        const customer = await customerService.createService(req.body);

        if (!customer)
            return res.status(400).send({ message: 'Erro no cadastro do cliente' });

        console.log(customer);    

        res.status(201).send({
            customer,
            message: 'Cliente cadastrado com sucesso!'
        });    

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findAllCustomers = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findCustomerById = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const updateCustomer = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const deleteCustomer = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default { createCustomer, findAllCustomers, findCustomerById, updateCustomer, deleteCustomer }