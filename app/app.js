const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Product = require('./routes/product');
const Profesor = require('./routes/profesor');
const Alumno = require('./routes/alumno');
const Clase = require('./routes/clase');
const Asistencia = require('./routes/asistencia');
const ClaseInscrito = require('./routes/claseinscrito');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/product', Product); 
App.use('/profesor', Profesor); 
App.use('/alumno', Alumno);
App.use('/clase', Clase); 
App.use('/asistencia', Asistencia); 
App.use('/claseinscrito', ClaseInscrito); 

module.exports = App;