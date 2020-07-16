/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	
	alert("El resultado es " + (parseInt(numeroUno)+ parseInt(numeroDos)));
		
}

function restar()
{
	var numeroUno;
	var numeroDos;
	
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	
	alert("El resultado es " + (parseInt(numeroUno) - parseInt(numeroDos)));
	
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	
	alert("El resultado es " + (parseInt(numeroUno) * parseInt(numeroDos)));
	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	
	alert("El resultado es " + (parseInt(numeroUno) / parseInt(numeroDos)));
	
}

