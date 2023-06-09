import orderService from "../services/order.service.js";
import OrderProduct from '../models/OrderProduct.js';

const createOrder = async (req, res) => {
    try {
        const orderProductsIds = Promise.all(req.body.produtos.map(async (orderProduct) => {
            let newOrderProduct = new OrderProduct({
                quantidade: orderProduct.quantidade,
                produto: orderProduct.produto
            });

            newOrderProduct = await newOrderProduct.save();

            return newOrderProduct._id;
        }));

        const orderIdsResolved = await orderProductsIds;

        const precosTotais = await Promise.all(orderIdsResolved.map(async (orderProductId) => {
            const orderProduct = await OrderProduct.findById(orderProductId).populate('produto', 'precoVenda');
            const precoTotal = orderProduct.produto.precoVenda * orderProduct.quantidade;
            return precoTotal;
        }));

        const precoTotal = precosTotais.reduce((a,b) => a + b, 0);

        let order = {
            produtos: orderIdsResolved,
            precoTotal,
        };

        const Order = await orderService.createService(order);

        if (!Order)
            return res.status(400).send({ message: 'Erro na criação do pedido' });

        res.status(201).send({
            Order,
            message: 'Pedido aberto com sucesso'
         });    
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

const findAllOrders = async (req, res) => {
    try {
        const orders = await orderService.findAllService();

        if (orders.length === 0)
            return res.status(400).send({ message: "Não há pedidos cadastrados" });

        res.send(orders);    
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

const findOrderById = async (req, res) => {
    try {
        const order = req.order;

        res.send(order);
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

const updateOrder = async (req, res) => {
    try {
        const { statusPedido } = req.body;

        if (!statusPedido)
            return res.status(400).send({message: "Preencha pelo menos um campo para atualização"});
        
        const { id } = req;
        
        await orderService.updateService(
            id,
            statusPedido
        );

        res.send({ message: 'Pedido atualizado com sucesso' });
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req;

        await orderService.deleteService(id).then(async order => {
            if(order) {
                await order.produtos.map(async orderItem => {
                    await OrderProduct.findByIdAndDelete(orderItem);
                });
            } else {
                return res.status(400).send({ message: "Produtos do pedido não encontrados" });
            }
        });

        res.send({ message: 'Pedido deletado com sucesso' });
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

export default { createOrder, findAllOrders, findOrderById, updateOrder, deleteOrder }