const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Product = require('./routes/product');
const Profesor = require('./routes/profesor');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/product', Product); 
App.use('/profesor', Profesor); 

module.exports = App;