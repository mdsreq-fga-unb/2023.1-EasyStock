import paymentService from "../services/payment.service.js";
import customerService from "../services/customer.service.js";
import orderService from "../services/order.service.js";

const createPayment = async (req, res) => {
    try {
        const { pedido, cliente, tipoPagamento, tipoEntrega } = req.body;

        if (!pedido || !tipoPagamento || !tipoEntrega)
            return res.status(400).send({message: "Preencha todos os campos obrigatórios para realizar o cadastro"});
        
        const order = await orderService.findByIdService(pedido);
    
        if (!order)
            return res.status(400).send({ message: "Pedido não encontrado" });    

        const payment = await paymentService.createService(req.body);

        if (!payment)
            return res.status(400).send({ message: "Erro na criação do pagamento" });
        
        if (tipoPagamento === 'Fiado' && cliente) {
            await customerService.updateService({
                id: cliente,
                divida: cliente.divida + order.precoTotal
            });
        }

        await orderService.updateService(pedido, 'Finalizado');

        res.status(201).send({
            payment,
            message: 'Pagamento realizado com sucesso'
         });  
    } catch (err) {
        res.status(500).send({ paymentController: err.message });
    }
}

const findAllPayments = async (req, res) => {
    try {
        const payments = await paymentService.findAllService();

        if (payments.length === 0)
            return res.status(400).send({ message: "Não há pedidos cadastrados" });

        res.send(payments); 
    } catch (err) {
        res.status(500).send({ paymentController: err.message });
    }
}

const findPaymentById = async (req, res) => {
    try {
        const payment = req.payment;

        res.send(payment);
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

const deletePayment = async (req, res) => {
    try {
        const { id } = req;

        await paymentService.deleteService(id);

        res.send({ message: 'Pagamento deletado com sucesso' });
    } catch (err) {
        res.status(500).send({ productController: err.message });
    }
}



export default { createPayment, findAllPayments, findPaymentById, deletePayment }