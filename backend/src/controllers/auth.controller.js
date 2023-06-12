import { generateToken, getUserFromToken } from "../services/auth.service.js";

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

export { loginAdmin, getUsername };