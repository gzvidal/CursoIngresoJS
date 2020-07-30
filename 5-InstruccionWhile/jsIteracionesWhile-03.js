/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador=0;
	claveIngresada = prompt("ingrese el número clave.");
	

	while(claveIngresada!="utn750"){
		contador++;
		alert("Contraseña incorrecta");

		if(contador==3){
			alert("Ya no tiene mas intentos");
			break;
		}

		claveIngresada=prompt("Ingrese el número clave");
		
	}
}
