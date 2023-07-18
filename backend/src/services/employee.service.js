import Employee from "../models/Employee.js";

// Funções que acessam o banco de dados para criação, leitura, atualização e exclusão
const createService = (body) => Employee.create(body);

const findAllService = () => Employee.find();

const findByIdService = (id) => Employee.findById(id);

const findByUsernameService = (username) => Employee.findOne({ username: username });

const updateService = (
    id,
    nomeCompleto,
    username,
    password,
    telefone,
    email,
    dataContratacao
) => Employee.findOneAndUpdate(
    { _id: id },
    { nomeCompleto, username, password, telefone, email, dataContratacao }
)

const deleteService = (id) => Employee.findOneAndDelete({ _id: id });

export default {
    createService,
    findAllService,
    findByIdService,
    findByUsernameService,
    updateService,
    deleteService
}