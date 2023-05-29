import mongoose from 'mongoose';

const connectDatabase = () => {
    mongoose.connect( process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado ao mongoDB"))
    .catch((err) => console.log(`Erro ao se conectar ao banco ${err}`));
}

export default connectDatabase;