const express = require('express');
const app = express();

const productRoute = require('./src/routes/product.route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;

app.use("/produto", productRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


