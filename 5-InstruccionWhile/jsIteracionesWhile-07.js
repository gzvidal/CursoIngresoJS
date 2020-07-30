/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;

	while(contador>-1){

		numeroIngresado= prompt("Ingrese un número");
		numeroIngresado= parseInt(numeroIngresado);
		if(isNaN(numeroIngresado)){
			alert("¡Error! Eso no es un número");
			continue
		}
		acumulador+=numeroIngresado;
		++contador;

		respuesta= prompt("Escriba 'fin' en caso de que quiera dejar de añadir números a la operación.");
		if(respuesta==="fin"){
			break;
		} 
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN