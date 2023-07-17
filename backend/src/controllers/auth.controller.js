import { generateToken, getUserFromToken, employeeLoginService } from "../services/auth.service.js";
<<<<<<< HEAD
import bcryptjs from "bcryptjs";
=======
import bcrypt from "bcrypt";
>>>>>>> edf738023bff689df015fe670993e3b417a5dd41

const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD)
            return res.status(400).send({ message: 'Usuário e/ou senha inválidos' });

        const token = generateToken(username, password);

        res.send({
            token,
            username
        });
    } catch (err) {
        res.status(500).send({ authController: err.message });
    }
}

const loginEmployee = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(400).send({ message: 'Insira os campos obrigatórios' });

        const employee = await employeeLoginService(username);

        if (!employee)
            return res.status(400).send({ message: 'Usuário e/ou senha inválidos' });

<<<<<<< HEAD
        const passwordIsValid = await bcryptjs.compare(password, employee.password);
=======
        const passwordIsValid = await bcrypt.compare(password, employee.password);
>>>>>>> edf738023bff689df015fe670993e3b417a5dd41

        if (!passwordIsValid)
            return res.status(400).send({ message: 'Usuário e/ou senha inválidos' });

        res.send(employee);
    } catch (err) {
        res.status(500).send({ authController: err.message });
    }
}

const getUsername = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token)
            return res.status(400).send({ message: 'Informe o token' });

        const username = getUserFromToken(token);

        if (username === 'false')
            return res.status(400).send({ message: 'Token inválido' });

        res.send({username});
    } catch (err) {
        res.status(500).send({ authController: err.message });
    }
}

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export { loginAdmin, loginEmployee, getUsername, validateEmail };