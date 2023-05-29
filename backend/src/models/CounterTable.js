import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({ // Contador para auto increment do codigoPDV
    id: {
        type: String
    },
    seq: {
        type: Number
    }
});

const Counter = mongoose.model('Counter', CounterSchema);

export default Counter;
