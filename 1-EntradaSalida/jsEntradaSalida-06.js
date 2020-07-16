/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
var numeroDos;

numeroUno=txtIdNumeroUno.value;
numeroDos=txtIdNumeroDos.value;

alert("El resultado es " + (parseInt(numeroUno)+ parseInt(numeroDos)));

}