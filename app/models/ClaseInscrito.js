const mongoose = require('mongoose');

const ClaseInscritoSchema = new mongoose.Schema({
    id_alumno: {
        type: String,
        unique: true,
        required: true
    },
    id_clase: {
        type: String,
        unique: true,
        required: true
    },
}); 

const ClaseInscrito = mongoose.model('ClaseInscrito', ClaseInscritoSchema);

module.exports = ClaseInscrito;