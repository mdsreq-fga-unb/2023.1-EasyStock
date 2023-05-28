const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({ // Contador para auto increment do codigoPDV
    id: {
        type: String
    },
    seq: {
        type: Number
    }
});

const Counter = mongoose.model('Counter', CounterSchema);

module.exports = Counter;
