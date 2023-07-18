import productService from '../services/product.service.js';
import counterService from '../models/CounterTable.js';
import orderService from '../services/order.service.js';

const createProduct = async (req, res) => { // Cadastro de um produto
    try {
        await counterService.findOneAndUpdate(
            { id: "autoinc" },
            { "$inc":{ "seq":1 } },
            { new:true }
        ).then(async (cd) => {
            let seqId;
        
            if (cd == null) { // Auto increment para codigoPDV
                const newinc = new counterService({ id: "autoinc", seq:1 });
                newinc.save();
                seqId = 1;
            } else {
                seqId = cd.seq;
            }

            let codigoPDV;
            codigoPDV = seqId;

            const { nome, precoCusto, precoVenda, qtdEstoque, qtdEstoqueMin, medida, statusVenda } = req.body;
            console.log(req.body);
            if (!nome || !precoCusto || !precoVenda || !qtdEstoque || !qtdEstoqueMin || !medida)
                return res.status(400).send({ message: "Preencha todos os campos para realizar o cadastro!" });
            console.log('teste');
            if (parseInt(qtdEstoque) < 0 || parseInt(qtdEstoqueMin) < 1)
                return res.status(400).send({ message: "Qtd de estoque e/ou qtd de estoque mínimo inválidos!" });

            if (parseInt(precoVenda) <= parseInt(precoCusto))
                return res.status(400).send({ message: "Defina um preço de venda superior ao preço de custo!" });

            const product = await productService.createService({ nome, precoCusto, precoVenda, qtdEstoque, qtdEstoqueMin, medida, codigoPDV, statusVenda });

            if (!product)
                return res.status(400).send({ message: "Erro no cadastro do produto!" });

            res.status(201).send({
                product: {
                    id: product._id,
                    nome,
                    precoCusto,
                    precoVenda,
                    qtdEstoque,
                    qtdEstoqueMin,
                    medida,
                    statusVenda,
                    codigoPDV
                },
                message: "Produto cadastrado com sucesso!"
            });
        })
    } catch (err) {
        res.status(500).send({ productController: err.message });
    }
}

const findAllProducts = async (req, res) => { // Listagem de todos os produtos cadastrados
    try {
        const products = await productService.findAllService();

        if (products.length === 0)
            return res.status(400).send({ message: "Não há produtos cadastrados!" });

        res.send(products);
    } catch (err) {
        res.status(500).send({ productController: err.message });
    }    
}

const searchProductsByName = async (req, res) => { // Busca de produtos pelo nome
    try {
        const { nome } = req.query;

        const products = await productService.searchByName(nome);

        if (products.length === 0)
            return res.status(400).send({ message: "Não há produtos cadastrados" });

        res.send(products);    
    } catch (err) {
        res.status(500).send({ productController: err.message });
    }
}

const findProductById = async (req, res) => { // Busca de um produto específico pelo ID
    try {
        const product = req.product;

        res.send(product);
    } catch (err) {
        res.status(500).send({ productController: err.message });
    }        
}

const updateProduct = async (req, res) => { // Atualiza os campos do produto
    try {
        const { nome, precoCusto, precoVenda, qtdEstoque, qtdEstoqueMin, medida } = req.body;
        let { statusVenda } = req.body;

        if (!nome && !precoCusto && !precoVenda && !qtdEstoque && !qtdEstoqueMin && !medida && !statusVenda)
            return res.status(400).send({ message: "Preencha pelo menos um campo para atualização!" });

        const { pdv, product } = req;

        if (parseInt(qtdEstoque) < 0 || parseInt(qtdEstoqueMin) < 1)
            return res.status(400).send({ message: "Qtd de estoque e/ou qtd de estoque mínimo inválidos!" });

        if (qtdEstoque && qtdEstoqueMin) {
            if (parseInt(qtdEstoque) <= parseInt(qtdEstoqueMin)) {
                statusVenda = false;
            } else {
                statusVenda = true;
            }
        } else if (qtdEstoque && !qtdEstoqueMin) {
            if (parseInt(qtdEstoque) <= parseInt(product.qtdEstoqueMin)) {
                statusVenda = false;
            } else {
                statusVenda = true;
            }
        } else if (!qtdEstoque && qtdEstoqueMin) {
            if (parseInt(product.qtdEstoque) <= parseInt(qtdEstoqueMin)) {
                statusVenda = false;
            } else {
                statusVenda = true;
            } 
        } else {
            if (parseInt(product.precoVenda) <= parseInt(product.qtdEstoqueMin)) {
                statusVenda = false;
            } else {
                statusVenda = true;
            } 
        }

        if (precoVenda && precoCusto) {
            if (parseInt(precoVenda) <= parseInt(precoCusto))
                return res.status(400).send({ message: "Defina um preço de venda superior ao preço de custo!" });
        } else if (precoVenda && !precoCusto) {
            if (parseInt(precoVenda) <= parseInt(product.precoCusto))
                return res.status(400).send({ message: "Defina um preço de venda superior ao preço de custo!" });
        } else if (!precoVenda && precoCusto) {
            if (parseInt(product.precoVenda) <= parseInt(precoCusto))
                return res.status(400).send({ message: "Defina um preço de venda superior ao preço de custo!" });
        }
            
        await productService.updateService(
            pdv,
            nome,
            precoCusto,
            precoVenda,
            qtdEstoque,
            qtdEstoqueMin,
            medida,
            statusVenda
        );
        
        res.send({ message: 'Produto atualizado com sucesso' });
    } catch (err) {
        res.status(500).send({ productController: err.message });
    }     
}

const deleteProduct = async (req, res) => { // Deleta um produto
    try {
        const { pdv } = req;

        const possiveisVendas = await orderService.findProductsInSales();
        if (possiveisVendas) {
            for (let i = 0; i < possiveisVendas.length; i++) {
                for (let j = 0; j < possiveisVendas[i].produtos.length; j++) {
                    if (possiveisVendas[i].produtos[j].produto.codigoPDV == pdv)
                        return res.status(400).send({ message: "Este produto está registrado em outra(s) venda(s), apague a venda antes de excluí-lo!" });
                }
            }
        }

        await productService.deleteService(pdv);

        res.send({ message: 'Produto deletado com sucesso' });
    } catch (err) {
        res.status(500).send({ productController: err.message });
    }
}

export default { createProduct, findAllProducts, searchProductsByName, findProductById, updateProduct, deleteProduct }