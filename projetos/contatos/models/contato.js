// /models/contato.js
var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            index: {
                unique: true
            }
        }
    });

    return mongoose.model('Contato', schema);
};