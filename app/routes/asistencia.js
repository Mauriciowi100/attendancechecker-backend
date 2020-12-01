const express = require('express');
const AsistenciaCtrl = require('../controllers/AsistenciaController');

const Router = express.Router();

Router.get('/', AsistenciaCtrl.index)             // api.com/product/
    .post('/', AsistenciaCtrl.create)              // api.com/product/
    .get('/:key/:value', AsistenciaCtrl.find, AsistenciaCtrl.show)    // api.com/product/category/Hogar
    .put('/:key/:value', AsistenciaCtrl.find, AsistenciaCtrl.update)    // api.com/product/name/SmasungGalaxy
    .delete('/:key/:value', AsistenciaCtrl.find, AsistenciaCtrl.remove) // api.com/product/name/SamsungGalaxy

module.exports = Router;