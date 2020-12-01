const express = require('express');
const ClaseCtrl = require('../controllers/ClaseController');

const Router = express.Router();

Router.get('/', ClaseCtrl.index)             // api.com/product/
    .post('/', ClaseCtrl.create)              // api.com/product/
    .get('/:key/:value', ClaseCtrl.find, ClaseCtrl.show)    // api.com/product/category/Hogar
    .put('/:key/:value', ClaseCtrl.find, ClaseCtrl.update)    // api.com/product/name/SmasungGalaxy
    .delete('/:key/:value', ClaseCtrl.find, ClaseCtrl.remove) // api.com/product/name/SamsungGalaxy

module.exports = Router;