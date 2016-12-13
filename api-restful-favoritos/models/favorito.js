'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//Definimos un tipo de objeto Favorito a partir de Schema
var FavoritoSchema = Schema({
	title: String,
	description: String,
	url: String
});

module.export = mongoose.model('Favorito', FavoritoSchema);