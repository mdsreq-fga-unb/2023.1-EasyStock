const express = require('express');
const app = express();
const connectDatabase = require('./src/database/db');

const productRoute = require('./src/routes/product.route');

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;

// B7y7mr7LbhgVbB94

app.use("/produto", productRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


