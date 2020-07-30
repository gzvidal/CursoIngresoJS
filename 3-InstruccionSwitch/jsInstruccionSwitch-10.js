function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;


	if(estacionIngresada=="Invierno"){
		switch (destinoIngresado){
			case ("Bariloche"):
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;
		}
	} else {
		if(estacionIngresada=="Verano"){
			switch (destinoIngresado){
				case("Cataratas"):
				case("Mar del plata"):
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
		} else {
			if(estacionIngresada=="Primavera"){
				switch (destinoIngresado){
					case("Cataratas"):					
					case("Mar del plata"):
					case("Cordoba"):
						alert("Se viaja");
						break;
					default:
						alert("No se viaja");
				}
			} else {
				alert("Se viaja");
			}
		}
	}
}