const mongoose = require('mongoose');

const AlumnoInscritoSchema = new mongoose.Schema({
    id_alumno: {
        type: String,
        required: true
    },
    id_clase: {
        type: String,
        required: true
    },
}); 

const AlumnoInscrito = mongoose.model('AlumnoInscrito', AlumnoInscritoSchema);

module.exports = AlumnoInscrito;