function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado){
		case ("Bariloche"): 
		alert("Este destino se encuentra en el oeste del país");
		break;
		case ("Cataratas"):
		alert("Este destino se encuentra en el norte del país");
		break;
		case ("Ushuaia"):
		alert("Este destino se encuentra en el sur del país");
		break;
		case ("Mar del plata"):
		alert("Este destino se encuentra en el este del país");
		break;
	}

}//FIN DE LA FUNCIÓN