'use strict'

//Se carga el fichero app.js
var app = require ('./app');

//Cargar la libreria Mongoose
var mongoose = require ('mongoose');

//Se define el puerto del servidor
var port = process.env.PORT || 3678; //3678 es el Puerto

//Configurar Mongoose
//parametros: url del servidor de mongoose (por defecto puerto 27017) y callback
mongoose.connect ('mongodb://localhost:27017/cursofavoritos' , (err,res) =>{

	if (err){

		throw (err);

	} else {

		//Mensaje de que la conexión a la bbdd es correcta
		console.log ('Conexion a MongoDB OK')
		
		//Crear el servidor
		//Parametros: Puerto, callback
		app.listen(port,function(){
		console.log (`API REST FAVORITOS funcionando en http://localhost:${port}`);
		}); 

	}

});



