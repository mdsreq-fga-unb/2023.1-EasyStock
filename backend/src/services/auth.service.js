import jwt from 'jsonwebtoken';

const generateToken = (username, password) => jwt.sign({username, password}, process.env.SECRET_JWT, { expiresIn: 259200 });

const getUserFromToken = (token) => jwt.verify(token, process.env.SECRET_JWT, (err, decode) => {
    if (err) {
        return 'false';
    }
    return decode.username;
});

export { generateToken, getUserFromToken }