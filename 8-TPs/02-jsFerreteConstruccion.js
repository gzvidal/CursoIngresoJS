/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var totalAlambre;
    var perimetro;


    largo= txtIdLargo.value;
    ancho= txtIdAncho.value;

    largo= parseInt(largo);
    ancho= parseInt(ancho);

    perimetro= (largo * 2) + (ancho * 2);

    totalAlambre= perimetro * 3;

    alert("La cantidad de alambre que se debe comprar es: " + totalAlambre + "metros");

}
function Circulo () 
{
    var radio;
    var perimetro;
    var totalAlambre;

    radio= txtIdRadio.value;

    radio=parseFloat(radio);

    perimetro= 2 * radio * Math.PI;
    totalAlambre= perimetro * 3;

    alert("La cantidad de alambre que se debe comprar es: " + totalAlambre.toFixed(2) + " metros");
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;


    largo= txtIdLargo.value;
    ancho= txtIdAncho.value;

    largo= parseFloat(largo);
    ancho= parseFloat(ancho);

    area= largo*ancho;

    cemento= 2*area;
    cal= 3*area;

    alert("Se necesitan " + cemento + " bolsas de cemento" + " y " + cal + " bolsas de cal");

	
}