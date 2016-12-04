'use strict' //Permite ejecutar ordenes (nuevos standares) que no interprentan algunos navegadores

var args = process.argv.slice(2) //Con slice() capturo los parametros que me llegan por consola

var operation = args[1]; //operacion
var num1 = parseFloat (args[0]);
var num2 = parseFloat (args[2]);

var result ='\n Introduce bien los parametros \b';

if (args.length == 3){
	switch (operation){
		case "mas":
			result = 'Suma: '+parseFloat (num1 + num2);
			break;
		case "menos":
			result = 'Resta: '+parseFloat (num1 - num2);
			break;
		case "por":
			result = 'Multiplicación: '+parseFloat (num1 * num2);
			break;
		case "entre":
			result = 'División: '+parseFloat (num1 / num2);
			break;
	}
}

console.log(result);