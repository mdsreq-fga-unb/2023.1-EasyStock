import { Router } from "express";
import orderController from "../controllers/order.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validId, validOrder, validOrderProduct } from "../middlewares/global.middleware.js";

const router = Router();

router.post("/", authMiddleware, validOrderProduct, orderController.createOrder);
router.get("/", authMiddleware, orderController.findAllOrders);
router.get("/vendas", authMiddleware, orderController.findAllProductsInSales);
router.get("/:id", authMiddleware, validId, validOrder, orderController.findOrderById);
router.delete("/:id", authMiddleware, validId, validOrder, orderController.deleteOrder);

export default router;