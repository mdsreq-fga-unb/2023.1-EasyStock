import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

// Rotas
import productRoute from './src/routes/product.route.js';
import authRoute from './src/routes/auth.route.js';
import customerRoute from './src/routes/customer.route.js';

const app = express();
dotenv.config(); // Habilitando o uso do .env

connectDatabase();
app.use(express.json()); // Habilitando uso do JSON no express
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.use("/produto", productRoute); // Rota padrão de produto
app.use("/auth", authRoute); // Rota de autenticação
app.use("/cliente", customerRoute); // Rota padrão do cliente

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


