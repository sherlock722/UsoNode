'use strict'

//Importar el modelo favorito
var Favorito = require ('../models/favorito');

//req lo que recibe
//res lo que devuelve
function prueba (req, res)  {

	//Recuperamos el valor con el request.params
	//var nombre = req.params.nombre;
	if (req.params.nombre){
		var nombre = req.params.nombre;
	} else {
		var nombre = "Sin Nombre";
	}

	//Devolvemos un JSON
	res.status (200).send({
		data: [2,3,4],
		message: "Hola Mundo con NodeJS y Express - " + nombre
	});
};

function getFavorito (req,res){

	var favoritoId = req.params.id;
	res.status(200).send({data: favoritoId});
}

function getFavoritos (req,res){

	var favoritoId = req.params.id;
	res.status(200).send({data: favoritoId});
}

function saveFavorito (req,res){

	var favorito = new Favorito();

	//Manda los parametros con POST
	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url

	//Para guardar en la bbdd
	favorito.save((err, favoritoStored) => {

		if (err){
			res.status(500).send ({message: 'Error al guardar el marcador'});
		}

		res.status(200).send({favorito: favoritoStored});	

	});
}

function updateFavorito (req,res){
	
	var params = req.body;
	res.status(200).send ({update:true, favorito: params});	
}

function deleteFavorito (req,res){
	
	var favoritoId = req.params.id;
	res.status(200).send({ delete:true, data: favoritoId});
}

module.exports = {
	prueba,
	getFavorito,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}




//Ejemplo de funcion de flecha
//funcion de flecha : app.get('/prueba/:nombre?',function (req, res){}) = app.get('/prueba/:nombre?',(req, res)=>{}) 

/*app.get('/prueba',function (req, res){

	//Devolvemos un JSON
	res.status (200).send({
		data: [2,3,4],
		message: "Hola Mundo con NodeJS y Express"
	});
});*/