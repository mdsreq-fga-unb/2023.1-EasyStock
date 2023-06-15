const router = require('./payment.route');



Test('Payment function', () => {

    const router = Router();
    
    //Testando as funções contidas no payment.route.js
    router.post("/", paymentController.createPayment);
    router.get("/", paymentController.findAllPayments);
    router.get("/:id", validId, validPayment, paymentController.findPaymentById);
    router.delete("/:id", validId, validPayment, paymentController.deletePayment);


});