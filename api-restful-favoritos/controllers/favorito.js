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

	//Para obtener un favorito a partir de su id utilizamos el método
	//findById que nos facilita moongose
	Favorito.findById(favoritoId, function (err, favorito){

		if (err){
			res.status(500).send({message: 'Error al devolver el marcador'});
		}

		if(!favorito){
			res.status(404).send({message: 'No hay marcadores'});
		}

		res.status(200).send({favorito});

	})

}

function getFavoritos (req,res){
	//Utilizamos el Modelo
	//Primer parametro orden, where... y segundo parametro función de Callback 
	//que recibe un error y la lista de favoritos
	Favorito.find ({}).sort('-_id').exec ((err, favoritos) =>{ //Ordenado por _id

		if (err){
			res.status(500).send({message: 'Error al devolver los marcadores'});
		}
		if(!favoritos){
			res.status(404).send({message: 'No hay marcadores'});
		}

		res.status(200).send({favoritos});
	});
	
}

function saveFavorito (req,res){

	var favorito = new Favorito();

	//Manda los parametros con POST
	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url

	//Para guardar en la bbdd (método de )
	favorito.save((err, favoritoStored) => {

		if (err){
			res.status(500).send({message: 'Error al guardar el marcador'});
		}

		res.status(200).send({favorito: favoritoStored});	

	});
}

function updateFavorito (req,res){
	
	var update = req.body;
	var favoritoId = req.params.id;

	console.log (update);

	//Se utiliza el método findByIdAndUpdate que nos proporciona moongose
	//Se pasan como parametros el id del favorito que queremos actualizar,
	//los datos a actualizar y una funcion de callback
	Favorito.findByIdAndUpdate (favoritoId, update, function (err, favoritoUpdate){

		if (err){
			res.status(500).send({message: 'Error al actualizar el marcador'});
		}

		res.status(200).send({favorito: favoritoUpdate});	

	});
	
}

function deleteFavorito (req,res){
	
	var favoritoId = req.params.id;

	Favorito.findById (favoritoId, function (err, favorito){

		if (err){

			res.status(500).send({message: 'Error al devolver el marcador'});
		}  

		if(!favorito){
			res.status(404).send({message: 'No hay marcadores'});
		} else {

			favorito.remove (err =>{

				if (err){

					res.status(500).send({message: 'Error al borrar el marcador'});
				}  else {

					res.status(200).send({message: 'El marcador se ha eliminado!!'});
				}

			});
		}

	});

}

module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
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