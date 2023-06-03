import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization)
            return res.status(401).send({ message: 'Acesso não autorizado' });

        const parts = authorization.split(" ");
        
        const [schema, token] = parts;

        if (parts.length !== 2)
            return res.status(401).send({ message: 'Acesso não autorizado' }); 

        if (schema !== 'Bearer')
            return res.status(401).send({ message: 'Acesso não autorizado' });
        
        jwt.verify(token, process.env.SECRET_JWT, (err) => {
            if (err)
                return res.status(401).send({ message: 'Token inválido' });
            
            return next();
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}


