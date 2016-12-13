'use strict'

var mongoose = require ('mongoose');
//Cargar el esquema de mongoose - Permite definir objetos
var Schema = mongoose.Schema;

//Definimos un tipo de objeto Favorito a partir de Schema
var FavoritoSchema = Schema({
	title: String,
	description: String,
	url: String
});

module.exports = mongoose.model('Favorito', FavoritoSchema);