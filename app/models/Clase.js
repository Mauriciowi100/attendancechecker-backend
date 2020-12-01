const mongoose = require('mongoose');

const ClaseSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    hora_inicio: {
        type: String,
        required: true
    },
    hora_fin: {
        type: String,
        required: true,
    },
    modalidad: {
        type: String,
        required: true,
        enum: ['Virtual', 'Presencial', 'Hibrido']
    },
    periodo: {
        type: String,
        required: true,
        enum: ['Enero-Mayo', 'Agosto-Diciembre']
    },
    dias: {
        type: String,
        require: true
    }
}); 

const Clase = mongoose.model('Clase', ClaseSchema);

module.exports = Clase;