import { Router } from "express";
import orderController from "../controllers/order.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validId, validOrder, validOrderProduct } from "../middlewares/global.middleware.js";

const router = Router();

router.post("/", validOrderProduct, orderController.createOrder);
router.get("/", orderController.findAllOrders);
router.get("/:id", validId, validOrder, orderController.findOrderById);
router.patch("/:id", validId, validOrder, orderController.updateOrder);
router.delete("/:id", validId, validOrder, orderController.deleteOrder);

export default router;