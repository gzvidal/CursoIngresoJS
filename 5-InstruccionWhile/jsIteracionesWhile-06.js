function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	numeroIngresado= prompt("Ingrese un número")
	
	while(contador<5){
		numeroIngresado= prompt("Ingrese otro numero");
		numeroIngresado= parseInt(numeroIngresado); 

		if(isNaN(numeroIngresado)){
			alert("¡Error! Eso no es un número");
			continue;
		}
	acumulador= numeroIngresado + acumulador;
	++contador;	
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}