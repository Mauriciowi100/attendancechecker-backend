const express = require('express');
const ProfesorCtrl = require('../controllers/AlumnoController');

const Router = express.Router();

Router.get('/', ProfesorCtrl.index)             // api.com/product/
    .post('/', ProfesorCtrl.create)              // api.com/product/.
    .get('/:id', ProfesorCtrl.find, ProfesorCtrl.show)    // api.com/product/category/Hogar
    //.put('/:email/:password', ProfesorCtrl.find, ProfesorCtrl.update)    // api.com/product/name/SmasungGalaxy
    .delete('/:id', ProfesorCtrl.find, ProfesorCtrl.remove) // api.com/product/name/SamsungGalaxy

module.exports = Router;