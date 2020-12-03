const express = require('express');
const AlumnoInscritoCtrl = require('../controllers/AlumnoInscritoController');

const Router = express.Router();

Router.get('/', AlumnoInscritoCtrl.index)             // api.com/product/
    .post('/', AlumnoInscritoCtrl.create)              // api.com/product/
    .get('/:key/:value', AlumnoInscritoCtrl.find, AlumnoInscritoCtrl.show)    // api.com/product/category/Hogar
    .put('/:key/:value', AlumnoInscritoCtrl.find, AlumnoInscritoCtrl.update)    // api.com/product/name/SmasungGalaxy
    .delete('/:key/:value', AlumnoInscritoCtrl.find, AlumnoInscritoCtrl.remove) // api.com/product/name/SamsungGalaxy

module.exports = Router;