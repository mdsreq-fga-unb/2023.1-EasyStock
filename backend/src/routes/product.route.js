import express from 'express';
import productController from '../controllers/product.controller.js';
import { validId, validProduct } from '../middlewares/global.middleware.js';

const router = express.Router();

router.post("/", productController.create); // Cadastra um produto
router.get("/", productController.findAll); // Lista todos os produtos
router.get("/:id", validId, validProduct, productController.findById); // Busca um produto pelo ID
router.patch("/:id", validId, validProduct, productController.update); // Atualiza os campos de um produto

export default router;