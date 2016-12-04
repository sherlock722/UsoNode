'use strict'

//req lo que recibe
//res lo que devuelve
function pruebaGet (req, res)  {

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

module.exports = {
	pruebaGet
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