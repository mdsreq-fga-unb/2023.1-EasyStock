import { generateToken } from "../services/auth.service.js";

const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD)
            return res.status(400).send({ message: 'Usuário e/ou senha inválidos' });

        const token = generateToken(username, password);

        res.send({token});
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export { loginAdmin };