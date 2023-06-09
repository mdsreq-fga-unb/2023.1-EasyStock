import { Router } from "express";
import paymentController from "../controllers/payment.controller.js";
import { validId, validPayment } from "../middlewares/global.middleware.js";

const router = Router();

router.post("/", paymentController.createPayment);
router.get("/", paymentController.findAllPayments);
router.get("/:id", validId, validPayment, paymentController.findPaymentById);
router.delete("/:id", validId, validPayment, paymentController.deletePayment);

export default router;