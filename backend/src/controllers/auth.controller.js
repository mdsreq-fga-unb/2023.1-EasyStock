import { generateToken, getUserFromToken, employeeLoginService } from "../services/auth.service.js";
<<<<<<< HEAD
import bcryptjs from "bcryptjs";
=======
import bcrypt from "bcrypt";
>>>>>>> edf738023bff689df015fe670993e3b417a5dd41

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(400).send({ message: 'Insira os campos obrigatórios!' });

        const employee = await employeeLoginService(username);

        if (!employee) {
            if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
                const token = generateToken(username);

                const admUsername = username + ":adm";

<<<<<<< HEAD
        const passwordIsValid = await bcryptjs.compare(password, employee.password);
=======
        const passwordIsValid = await bcrypt.compare(password, employee.password);
>>>>>>> edf738023bff689df015fe670993e3b417a5dd41
                res.send({
                    token,
                    username: admUsername
                });
            } else {
                return res.status(400).send({ message: 'Usuário e/ou senha inválidos!' });
            }
        } else {
            const passwordIsValid = await bcryptjs.compare(password, employee.password);

            if (!passwordIsValid)
                return res.status(400).send({ message: 'Usuário e/ou senha inválidos!' });

            const token = generateEmployeeToken(employee.id, employee.username);

            const empUsername = username + ":emp";

            res.send({
                token,
                username: empUsername
            });
        }
    } catch (err) {
        res.status(500).send({ authController: err.message });
    }
}

const getUsername = async (req, res) => {
    try {
        const { adminToken, employeeToken } = req.body;

        if (!adminToken && !employeeToken)
            return res.status(400).send({ message: 'Informe o token!' });

        if (adminToken) {
            const username = getUserFromToken(adminToken);

            if (username === 'false')
                return res.status(400).send({ message: 'Token inválido!' });

            res.send({username});    
        } else if (employeeToken) {
            const username = getUserFromToken(employeeToken);

            if (username === 'false')
                return res.status(400).send({ message: 'Token inválido!' });

            res.send({username});    
        }    
    } catch (err) {
        res.status(500).send({ authController: err.message });
    }
}

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export { login, getUsername, validateEmail };