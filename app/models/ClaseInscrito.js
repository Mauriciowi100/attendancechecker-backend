const mongoose = require('mongoose');

const ClaseInscritoSchema = new mongoose.Schema({
    id_alumno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    id_clase: {
        type: String,
        required: true
    },
}); 

const ClaseInscrito = mongoose.model('ClaseInscrito', ClaseInscritoSchema);

module.exports = ClaseInscrito;