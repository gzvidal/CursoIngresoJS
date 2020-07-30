/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var positivos;
	var negativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(contador>-1){
		positivos=prompt("Ingrese un número positivo");
		positivos=parseInt(positivos);

		if(isNaN(positivos)){
			alert("¡Error! Eso no es un número");
			continue;
		}
	sumaPositivos+=positivos;
	
		negativos=prompt("Ingrese un número negativo");
		negativos=parseInt(negativos);

		if(isNaN(negativos)){
			alert("¡Error! Eso no es un número");
			continue
		}
	
	multiplicacionNegativos=negativos*negativos;

	
	respuesta=prompt("Escriba cualquier letra si quiere añadir más números a la operación. De lo contrario, escriba 'fin'");
		if(respuesta==="fin"){
			break;
		}
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN