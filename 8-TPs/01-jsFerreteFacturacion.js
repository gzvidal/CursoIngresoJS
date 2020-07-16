/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno= txtIdPrecioUno.value;
    precioDos= txtIdPrecioDos.value;
    precioTres= txtIdPrecioTres.value;

    precioUno= parseInt(precioUno);
    precioDos= parseInt(precioDos);
    precioTres= parseInt(precioTres);

    resultado= precioUno+precioDos+precioTres;

    alert ("El resultado de la suma es " +resultado);

}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno= txtIdPrecioUno.value;
    precioDos= txtIdPrecioDos.value;
    precioTres= txtIdPrecioTres.value;

    precioUno= parseInt(precioUno);
    precioDos= parseInt(precioDos);
    precioTres= parseInt(precioTres);

    resultado= (precioUno+precioDos+precioTres)/3;

    alert("El promedio de los tres números es " + resultado);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno= txtIdPrecioUno.value;
    precioDos= txtIdPrecioDos.value;
    precioTres= txtIdPrecioTres.value;

    precioUno= parseInt(precioUno);
    precioDos= parseInt(precioDos);
    precioTres= parseInt(precioTres);

    resultado= precioUno+precioDos+precioTres;
    resultado= resultado*1.21;

    alert("El precio final es de: " + resultado);

}