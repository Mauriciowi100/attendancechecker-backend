const express = require('express');
const AlumnoController = require('../controllers/AlumnoController');

const Router = express.Router();

Router.get('/', AlumnoController.index)             // api.com/product/
    .post('/', AlumnoController.create)              // api.com/product/.
    .get('/:id', AlumnoController.find, AlumnoController.show)    // api.com/product/category/Hogar
    //.put('/:email/:password', AlumnoController.find, AlumnoController.update)    // api.com/product/name/SmasungGalaxy
    .delete('/:id', AlumnoController.find, AlumnoController.remove) // api.com/product/name/SamsungGalaxy

module.exports = Router;