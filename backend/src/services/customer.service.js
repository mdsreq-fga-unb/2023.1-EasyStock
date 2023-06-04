import Customer from "../models/Customer.js";

// Funções que acessam o banco de dados para criação, leitura, atualização e exclusão
const createService = (body) => Customer.create(body);

const findAllService = () => Customer.find();

const findByIdService = (id) => Customer.findById(id);

const updateService = (
    id,
    nome,
    telefone,
    email,
    divida
) => Customer.findOneAndUpdate(
    { _id: id },
    { nome, telefone, email, divida }
)

const deleteService = (id) => Customer.findOneAndDelete({ _id: id });

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
    deleteService
}