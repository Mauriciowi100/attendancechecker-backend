const express = require('express');
const ClaseInscritoCtrl = require('../controllers/ClaseInscritoController');

const Router = express.Router();

Router.get('/', ClaseInscritoCtrl.index)             // api.com/product/
    .post('/', ClaseInscritoCtrl.create)              // api.com/product/
    .get('/:key/:value', ClaseInscritoCtrl.find, ClaseInscritoCtrl.show)    // api.com/product/category/Hogar
    .put('/:key/:value', ClaseInscritoCtrl.find, ClaseInscritoCtrl.update)    // api.com/product/name/SmasungGalaxy
    .delete('/:key/:value', ClaseInscritoCtrl.find, ClaseInscritoCtrl.remove) // api.com/product/name/SamsungGalaxy

module.exports = Router;