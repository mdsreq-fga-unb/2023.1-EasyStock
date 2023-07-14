import jwt from 'jsonwebtoken';
import Employee from '../models/Employee.js';

const generateToken = (username) => jwt.sign({username}, process.env.SECRET_JWT, { expiresIn: 86400 });

const generateEmployeeToken = (id, username) => jwt.sign({id, username}, process.env.SECRET_JWT, { expiresIn: 86400 });

const getUserFromToken = (token) => jwt.verify(token, process.env.SECRET_JWT, (err, decode) => {
    if (err) {
        return 'false';
    }
    return decode.username;
});

const employeeLoginService = (username) => Employee.findOne({ username: username }).select("+password");

export { generateToken, generateEmployeeToken, getUserFromToken, employeeLoginService }