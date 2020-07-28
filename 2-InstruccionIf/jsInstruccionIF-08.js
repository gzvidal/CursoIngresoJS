function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	edad=txtIdEdad.value;
	estadoCivilIngresado=estadoCivil.value;

	if(edad>=18 && estadoCivilIngresado=="Soltero"){
		alert("Es soltero y no es menor");
	}
}