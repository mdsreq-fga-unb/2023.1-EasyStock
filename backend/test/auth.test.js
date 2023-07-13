import dotenv from 'dotenv'; 
dotenv.config();
import jwt from 'jsonwebtoken';
import Employee from '../src/models/Employee';

import {
    generateToken, 
    getUserFromToken, 
    employeeLoginService, 
    generateEmployeeToken
} from '../src/services/auth.service'

describe('generateToken', () => {
    it('Testando geração de Token', () => {
        const username = 'Carla';
        const password = 'Carla123';
        const token = generateToken(username, password);

        expect(token).toBeDefined();
        expect(typeof token).toBe('string')

        const decodedToken = jwt.verify(token, process.env.SECRET_JWT);
        expect(decodedToken).toBeDefined();
        expect(decodedToken.username).toBe(username);
    })
    it('getUserFromToken', () => {
        const token = jwt.sign({username: 'Carol'}, process.env.SECRET_JWT);
        const result = getUserFromToken(token);
        expect(result).toBe('Carol');
    })
    it('invalidToken', () => {
        const invalidToken = 'invalid_token';
        const result = getUserFromToken(invalidToken);
        expect(result).toBe('false');
    })
})
describe('employeeLoginService', () => {
    it('Encontrar funcionário pelo nome de usuário', async () => {
      const mockUsername = 'Carol';
      const mockEmployee = {
        _id: 'employee_id',
        username: mockUsername,
        select: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValueOnce({
          _id: 'employee_id',
          username: mockUsername,
        }),
      };
  
      Employee.findOne = jest.fn().mockReturnValueOnce(mockEmployee);
  
      const result = await employeeLoginService(mockUsername);
  
      expect(Employee.findOne).toHaveBeenCalledWith({ username: mockUsername });
      expect(mockEmployee.select).toHaveBeenCalledWith('+password');
      expect(result).toEqual(
        expect.objectContaining({
          _id: 'employee_id',
          username: mockUsername,
        })
      );
    });
  });
  describe('Testando generateEmployeeToken', () => {
    it('deve gerar um token válido para um funcionário', () => {
      const employeeId = 'employee123';
      const token = generateEmployeeToken(employeeId);
  
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
  
      const decodedToken = jwt.verify(token, process.env.SECRET_JWT);
      expect(decodedToken).toBeDefined();
      expect(decodedToken.id).toBe(employeeId);
    });
  
    it('deve expirar após 24 horas', () => {
      const employeeId = 'employee123';
      const token = generateEmployeeToken(employeeId);
  
      const expirationDate = jwt.decode(token).exp;
      const currentDate = Math.floor(Date.now() / 1000);
      const differenceInSeconds = expirationDate - currentDate;
      const twentyFourHoursInSeconds = 24 * 60 * 60;
      expect(differenceInSeconds).toBeLessThanOrEqual(twentyFourHoursInSeconds);
    });
  });
  
  
  
  
  