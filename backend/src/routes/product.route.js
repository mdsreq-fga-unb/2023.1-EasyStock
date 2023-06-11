import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { validProduct } from '../middlewares/global.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.post("/", authMiddleware, productController.createProduct); // Cadastra um produto
router.get("/", authMiddleware, productController.findAllProducts); // Lista todos os produtos
router.get("/buscar", authMiddleware, productController.searchProductsByName); // Busca de produtos pelo nome
router.get("/:pdv", authMiddleware, validProduct, productController.findProductById); // Busca um produto pelo ID
router.patch("/:pdv", authMiddleware, validProduct, productController.updateProduct); // Atualiza os campos de um produto
router.delete("/:pdv", authMiddleware, validProduct, productController.deleteProduct); // Deleta um produto

export default router;