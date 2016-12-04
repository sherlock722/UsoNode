'use strict'

var express = require('express'); //Cargar el paquete de express
var bodyParser = require('body-parser');

var app = express(); //Llamamos a express
var port = process.env.PORT || 3678; //Puerto

//Configuracion de Body-Parser
//Nos devuelve un objeto JAVASCRIPT para trabajar con él (un JSON)
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//Crear una ruta con GET
//req lo que recibe
//res lo que devuelve
/*app.get('/prueba',function (req, res){

	//Devolvemos un JSON
	res.status (200).send({
		data: [2,3,4],
		message: "Hola Mundo con NodeJS y Express"
	});
});*/

//Crear una ruta con GET
//req lo que recibe
//res lo que devuelve
// el ? hace que el parametro nombre sea opcional
//Funciones tipo flecha: cambiar function(req,res) por (req,res) =>
app.get('/prueba/:nombre?', (req, res) => {
//app.get('/prueba/:nombre?',function (req, res){

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
});



//Crear el servidor
//Parametros: Puerto, callback
app.listen(port,function(){
	console.log (`API REST FAVORITOS funcionandon en http://localhost:${port}`);
}); 
