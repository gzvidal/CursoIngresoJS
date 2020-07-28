function mostrar()
{
	var edad;
	var estadoCivilIngresado;
	
	edad=txtIdEdad.value;
	estadoCivilIngresado=estadoCivil.value;

	if(edad<=18 && estadoCivilIngresado!="Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}

}