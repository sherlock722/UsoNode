'use strict';

var express = require('express');
var FavoritoController = require ('../controllers/favorito');

//Se carga el router de Express
var api = express.Router();

//Se definen rutas
//Crear una ruta con GET
// el ? hace que el parametro nombre sea opcional
api.get('/prueba/:nombre?', FavoritoController.pruebaGet);


module.exports = api;