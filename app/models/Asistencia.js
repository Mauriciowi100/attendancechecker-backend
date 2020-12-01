const mongoose = require('mongoose');

const AsistenciaSchema = new mongoose.Schema({
    id_clase_inscrito: {
        type: String,
        unique: true,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    asistio: {
        type: Boolean,
        required: true
    }
}); 

const Asistencia = mongoose.model('Asistencia', AsistenciaSchema);

module.exports = Asistencia;