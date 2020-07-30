function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioBase = 15000


	if(estacionIngresada=="Invierno"){
		switch (destinoIngresado){
			case ("Bariloche"):
				alert(precioBase*1.20);
				break;
			case ("Mar del plata"):
			case ("Cataratas"):
				alert(precioBase*0.80);
				break;
			case ("Cordoba"):
				alert(precioBase*0.90);
				break;
			default:
				alert(precioBase);
		}
	} else {
		if(estacionIngresada=="Verano"){
			switch (destinoIngresado){
				case("Bariloche"):
				alert(precioBase*0.80);
				break;
				case("Cataratas"):
				case("Cordoba"):
				alert(precioBase*1.10);
				break;
				case("Mar del plata"):
				alert(precioBase*1.20);
				break;
			}
		} else {
			if(estacionIngresada=="Primavera"|| estacionIngresada=="Otoño"){
				switch (destinoIngresado){
					case("Bariloche"):
					alert(precioBase*1.10);
					break;
					case("Cataratas"):
					alert(precioBase*1.10);
					break;
					case("Mar del plata"):
					alert(precioBase*1.10);
					break;
					case("Cordoba"):
					alert(precioBase);
					break;
				}
			}
		}
	}
}