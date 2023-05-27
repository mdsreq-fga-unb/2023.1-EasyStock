const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect("mongodb+srv://admin:B7y7mr7LbhgVbB94@cluster0.moj5xkp.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado ao mongoDB"))
    .catch((err) => console.log(`Erro ao se conectar ao banco ${err}`));
}

module.exports = connectDatabase;