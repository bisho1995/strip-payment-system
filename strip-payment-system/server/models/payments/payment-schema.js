const mongoose = require('../db');

let paymentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    amount:{
        type: number,
        required: true
    },
    items: {
        type: number,
        required: true,
    }
});

let payment = mongoose.model('Payment', paymentSchema);

module.exports = {payment};