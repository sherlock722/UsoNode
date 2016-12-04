'use strict'

//Configuracion de Express, otros módulos (Body-Parser...) y rutas

var express = require('express'); //Cargar el paquete de express
var bodyParser = require('body-parser');

var app = express(); //Llamamos a express

//Configuracion de Body-Parser
//Nos devuelve un objeto JAVASCRIPT para trabajar con él (un JSON)
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());


//Se carga el fichero de routas
var api = require ('./routes/favorito');

//Usar las routas en Express 
//Las rutas están en el directorio routes
app.use ('/api',api);

//Se exporta el módulo para que pueda ser utilizado en otros ficheros
module.exports = app;
