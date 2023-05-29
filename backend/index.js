import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';
import productRoute from './src/routes/product.route.js';

const app = express();

dotenv.config();

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;

app.use("/produto", productRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


