import {generateToken, getUserFromToken} from '../src/services/auth.service'
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

describe('Testando operações de Token', () => {
    it('Testando geração de Token', () => {
        //Dados de teste
        const username = 'Carla';
        const password = 'Carla123';

        //Gerar Token
        const token = generateToken(username, password);

        //Verificando se o token foi gerado corretamente
        expect(token).toBeDefined();
        expect(typeof token).toBe('string')

        //Verificar se o token pode ser verificado corretamente
        const decodedToken = jwt.verify(token, process.env.SECRET_JWT);
        expect(decodedToken).toBeDefined();
        expect(decodedToken.username).toBe(username);
    })
    it('Testando getUserFromToken', () => {
        const token = jwt.sign({username: 'Carol'}, process.env.SECRET_JWT);
        const result = getUserFromToken(token);
        expect(result).toBe('Carol');
    })
    it('Testando se token inválido retorna false', () => {
        const invalidToken = 'invalid_token';
        const result = getUserFromToken(invalidToken);
        expect(result).toBe('false');
    })
})