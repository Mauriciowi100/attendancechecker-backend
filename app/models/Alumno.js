const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
}); 

const Alumno = mongoose.model('Alumno', AlumnoSchema);

module.exports = Alumno;