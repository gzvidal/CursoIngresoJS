/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>10 || isNaN(numeroIngresado)){
		numeroIngresado = prompt("Tiene que ser entre 0 y 10");
	}
	txtIdNumero.value= "El número ingresado es " + numeroIngresado;
}