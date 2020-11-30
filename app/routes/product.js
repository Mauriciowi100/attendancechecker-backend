const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/', ProductCtrl.index)             // api.com/product/
    .post('/', ProductCtrl.create)              // api.com/product/
    .get('/:key/:value', ProductCtrl.find, ProductCtrl.show)    // api.com/product/category/Hogar
    .put('/:key/:value', ProductCtrl.find, ProductCtrl.update)    // api.com/product/name/SmasungGalaxy
    .delete('/:key/:value', ProductCtrl.find, ProductCtrl.remove) // api.com/product/name/SamsungGalaxy

module.exports = Router;