import jwt from 'jsonwebtoken';

const generateToken = (username, password) => jwt.sign({username, password}, process.env.SECRET_JWT, { expiresIn: 259200 });

export { generateToken }