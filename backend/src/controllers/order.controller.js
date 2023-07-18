import orderService from "../services/order.service.js";
import OrderProduct from '../models/OrderProduct.js';
import customerService from "../services/customer.service.js";
import productService from "../services/product.service.js";

const createOrder = async (req, res) => {
    try {
        const { produtos, cliente, tipoPagamento, tipoEntrega } = req.body;

        let cont = 0;

        if (!produtos)
            return res.status(400).send({ message: "Ao menos um produto deve ser selecionado para o pedido ser realizado!" });

        if (!tipoPagamento || !tipoEntrega)
            return res.status(400).send({ message: "Preencha todos os campos obrigatórios para realizar o pagamento!" });

        const orderProductsIds = Promise.all(req.body.produtos.map(async (orderProduct) => {
            let newOrderProduct = new OrderProduct({
                quantidade: orderProduct.quantidade,
                produto: orderProduct.produto
            });

            newOrderProduct = await newOrderProduct.save();

            cont++;

            return newOrderProduct._id;
        }));

        const orderIdsResolved = await orderProductsIds;

        const precosTotais = await Promise.all(orderIdsResolved.map(async (orderProductId) => {
            const orderProduct = await OrderProduct.findById(orderProductId).populate('produto', 'precoVenda');
            const precoTotal = orderProduct.produto.precoVenda * orderProduct.quantidade;
            return precoTotal;
        }));

        const precoTotal = precosTotais.reduce((a,b) => a + b, 0);

        let dataPedido = new Date();
        dataPedido = dataPedido.toLocaleString('pt-BR', { timezone: 'UTC' });

        let order = {
            produtos: orderIdsResolved,
            precoTotal,
            cliente,
            tipoPagamento,
            tipoEntrega,
            dataPedido
        };

        const Order = await orderService.createService(order);

        if (!Order)
            return res.status(400).send({ message: 'Erro na criação do pedido!' });

        for (let i = 0; i < cont; i++) {
            let qtdProdAposVenda = 0;
            let statusVenda;
            const product = await productService.findByIdService(produtos[i].produto);

            if (product) {
                qtdProdAposVenda = product.qtdEstoque - produtos[i].quantidade;
                
                if (qtdProdAposVenda < product.qtdEstoqueMin) {
                    statusVenda = false;
                } else {
                    statusVenda = true;
                }

                await productService.updateAfterOrder(
                    produtos[i].produto,
                    qtdProdAposVenda,
                    statusVenda
                );
            }
        }

        if (tipoPagamento === 'Fiado' && cliente) {
            const customer = await customerService.findByIdService(cliente);
            if (!customer)
                return res.status(400).send({ message: "Cliente não encontrado!" });

            const divida = customer.divida + order.precoTotal;

            await customerService.updateService(
                cliente,
                customer.nome,
                customer.telefone,
                customer.email,
                divida
            );
        }    

        res.status(201).send({
            Order,
            message: 'Pedido finalizado com sucesso!'
        });    
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

const findAllOrders = async (req, res) => {
    try {
        const orders = await orderService.findAllService();

        if (orders.length === 0)
            return res.status(400).send({ message: "Não há pedidos cadastrados!" });

        res.send(orders);    
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

const findAllProductsInSales = async (req, res) => {
    try {
        const orders = await orderService.findProductsInSales();

        if (orders.length === 0)
            return res.status(400).send({ message: "Não há pedidos cadastrados!" });

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
            return res.status(400).send({ message: "Preencha pelo menos um campo para atualização!" });
        
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
                order.produtos.map(async orderItem => {
                    await OrderProduct.findByIdAndDelete(orderItem);
                });
            } else {
                return res.status(400).send({ message: "Produtos do pedido não encontrados!" });
            }
        });

        res.send({ message: 'Pedido deletado com sucesso' });
    } catch (err) {
        res.status(500).send({ orderController: err.message });
    }
}

export default {
    createOrder,
    findAllOrders,
    findAllProductsInSales,
    findOrderById,
    updateOrder,
    deleteOrder
}