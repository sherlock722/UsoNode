'use strict'

//Se carga el fichero app.js
var app = require ('./app');

//Se define el puerto del servidor
var port = process.env.PORT || 3678; //3678 es el Puerto

//Crear el servidor
//Parametros: Puerto, callback
app.listen(port,function(){
	console.log (`API REST FAVORITOS funcionandon en http://localhost:${port}`);
}); 
