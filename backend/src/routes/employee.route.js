import { Router } from "express";
import employeeController from "../controllers/employee.controller.js";
import { validId, validEmployee } from "../middlewares/global.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, employeeController.createEmployee); // Adiciona um funcionário
router.get("/", authMiddleware, employeeController.findAllEmployees); // Lista todos os funcionários
router.get("/:id", authMiddleware, validId, validEmployee, employeeController.findEmployeeById); // Busca um usuários específico pelo ID
router.patch("/:id", authMiddleware, validId, validEmployee, employeeController.updateEmployee); // Atualiza um funcionário específico pelo ID
router.delete("/:id", authMiddleware, validId, validEmployee, employeeController.deleteEmployee); // Deleta um funcionário específico pelo ID

export default router;