function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado){
		case ("Bariloche"): 
		case ("Ushuaia"):
		alert("En este destino hay un clima frío");
		break;
		case ("Cataratas"):
		case ("Mar del plata"):
		alert("En este destino hay un clima cálido");
		break;
	}

}//FIN DE LA FUNCIÓN