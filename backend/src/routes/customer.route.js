import { Router } from "express";
import customerController from "../controllers/customer.controller.js"; 
import { validId, validCustomer } from '../middlewares/global.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.post("/", authMiddleware, customerController.createCustomer); // Cadastra um cliente
router.get("/", authMiddleware, customerController.findAllCustomers); // Lista todos os clientes
router.get("/:id", authMiddleware, validId, validCustomer, customerController.findCustomerById); // Busca um cliente pelo ID
router.patch("/:id", authMiddleware, validId, validCustomer, customerController.updateCustomer); // Atualiza os campos de um cliente
router.delete("/:id", authMiddleware, validId, validCustomer, customerController.deleteCustomer); // Deleta um cliente

export default router;