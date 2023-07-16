import employeeService from '../services/employee.service.js';
import { validateEmail } from './auth.controller.js';
import bcrypt from "bcrypt";

const createEmployee = async (req, res) => { // Cadastro de um funcionário
    try {
        const { nomeCompleto, username, password, telefone, email, dataContratacao } = req.body;

        if (!nomeCompleto || !username || !password || !dataContratacao)
            return res.status(400).send({ message: "Preencha todos os campos obrigatórios para realizar o cadastro!" });

        if (username == process.env.ADMIN_USERNAME)
            return res.status(400).send({ message: "Username inválido, tente outro!" });

        if (username.includes(":"))
            return res.status(400).send({ message: "Caracter inválido, digite outro username!" });    

        const findEmployee = await employeeService.findByUsernameService(username);

        if (findEmployee)
            return res.status(400).send({ message: "Username já cadastrado, tente outro!" });

        if (email) {
            const valEmail = validateEmail(email);
            if (!valEmail)
                return res.status(400).send({ message: 'Formato de email inválido!' }); 
        }

        const employee = await employeeService.createService(req.body);

        if (!employee)
            return res.status(400).send({ message: 'Erro no cadastro do funcionário!' });

        res.status(201).send({
            employee,
            message: 'Funcionário cadastrado com sucesso!'
        });    
    } catch (err) {
        res.status(500).send({ employeeController: err.message });
    }
}

const findAllEmployees = async (req, res) => { // Listagem de todos os funcionários cadastrados
    try {
        const employees = await employeeService.findAllService();

        if (employees.length === 0)
            return res.status(400).send({ message: "Não há funcionários cadastrados!" });

        // for (let i = 0; i < employees.length; i++) {
        //     console.log(employees[i].dataContratacao.toLocaleString('pt-BR', { timezone: 'UTC' }).substring(0, 10));
        //     let newDate = new Date(employees[i].dataContratacao);
        //     console.log(typeof(newDate));
        //     console.log(newDate);
        //     employees[i].dataContratacao = newDate; 
        // }    
        res.send(employees);
    } catch (err) {
        res.status(500).send({ employeeController: err.message });
    }
}

const findEmployeeById = async (req, res) => { // Busca de um funcionário específico pelo ID
    try {
        const employee = req.employee;

        res.send(employee);
    } catch (err) {
        res.status(500).send({ employeeController: err.message });
    }
}

const updateEmployee = async (req, res) => { // Atualiza os campos do funcionário
    try {
        const { nomeCompleto, username, password, telefone, email, dataContratacao } = req.body;
        let newPassword = password;

        if (!nomeCompleto && !username && !password && !telefone && !email && !dataContratacao)
            return res.status(400).send({ message: "Preencha pelo menos um campo para atualização!" });

        if (email) {
            const valEmail = validateEmail(email);
            if (!valEmail)
                return res.status(400).send({ message: 'Formato de email inválido!' }); 
        }

        if (password) {
            newPassword = await bcrypt.hash(password, 10);
        }

        const { id } = req;

        await employeeService.updateService(
            id,
            nomeCompleto,
            username,
            newPassword,
            telefone,
            email,
            dataContratacao
        );

        res.send({ message: 'Funcionário atualizado com sucesso' });
    } catch (err) {
        res.status(500).send({ employeeController: err.message });
    }
}

const deleteEmployee = async (req, res) => { // Deleta um funcionário
    try {
        const { id } = req;

        await employeeService.deleteService(id);

        res.send({ message: 'Cliente deletado com sucesso!' });
    } catch (err) {
        res.status(500).send({ employeeController: err.message });
    }
}

export default { createEmployee, findAllEmployees, findEmployeeById, updateEmployee, deleteEmployee }