import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';
import productRoute from './src/routes/product.route.js';

const app = express();

dotenv.config(); // Habilitando o uso do .env

connectDatabase();
app.use(express.json()); // Habilitando uso do JSON no express
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;

app.use("/produto", productRoute); // Rota padrão de produto

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


