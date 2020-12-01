const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        unique: true,
        required: true
    },
    class: {
        type: String,
        required: true
    }
}); 

const Alumno = mongoose.model('Alumno', AlumnoSchema);

module.exports = Alumno;