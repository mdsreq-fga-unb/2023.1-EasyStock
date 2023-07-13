import express from 'express';
import connectDatabase from './src/database/db.js';
import "dotenv/config";
import cors from 'cors';

// Rotas
import productRoute from './src/routes/product.route.js';
import authRoute from './src/routes/auth.route.js';
import customerRoute from './src/routes/customer.route.js';
import orderRoute from './src/routes/order.route.js';
import employeeRoute from './src/routes/employee.route.js'

const app = express();

connectDatabase();
app.use(express.json()); // Habilitando uso do JSON no express
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: "https://easystock-app.netlify.app"
}))

app.use("/produto", productRoute); // Rota padrão de produto
app.use("/auth", authRoute); // Rota de autenticação
app.use("/cliente", customerRoute); // Rota padrão do cliente
app.use("/pedido", orderRoute); // Rota padrão do pedido
app.use("/funcionario", employeeRoute); // Rota padrão do funcionário

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});




