const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.post("/", productController.create); // Cadastra um produto
router.get("/", productController.findAll); // Lista todos os produtos
router.get("/:id", productController.findById); // Busca um produto pelo ID

module.exports = router;