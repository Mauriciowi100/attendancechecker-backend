const mongoose = require('mongoose');

const ProfesorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}); 

const Profesor = mongoose.model('Profesor', ProfesorSchema);

module.exports = Profesor;