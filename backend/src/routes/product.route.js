import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { validId, validProduct } from '../middlewares/global.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.post("/", authMiddleware, productController.createProduct); // Cadastra um produto
router.get("/", productController.findAllProducts); // Lista todos os produtos
router.get("/:id", authMiddleware, validId, validProduct, productController.findProductById); // Busca um produto pelo ID
router.patch("/:id", authMiddleware, validId, validProduct, productController.updateProduct); // Atualiza os campos de um produto
router.delete("/:id", authMiddleware, validId, validProduct, productController.deleteProduct); // Deleta um produto

export default router;