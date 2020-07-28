/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio()
{
    var precioInicial;
    var precioConDescuento;
    var cantidadDeLamparas;
    var marcaDeLampara;
    var ingresosBrutos;

    precioConDescuento=txtIdprecioDescuento.value;
    precioInicial=35;
    cantidadDeLamparas=txtIdCantidad.value;
    marcaDeLampara=Marca.value;
    parseInt(cantidadDeLamparas);

    if(cantidadDeLamparas>=6){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.5
    } 
    else if(cantidadDeLamparas==5 && marcaDeLampara=="ArgentinaLuz"){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.4
    } 
    else if(cantidadDeLamparas==5){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.3
    }
    else if(cantidadDeLamparas==4 && marcaDeLampara=="ArgentinaLuz" || marcaDeLampara=="FelipeLamparas"){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.25
    } 
    else if(cantidadDeLamparas==4){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.20
    } 
    else if(cantidadDeLamparas==3 && marcaDeLampara=="ArgentinaLuz"){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.15
    } 
    else if(cantidadDeLamparas==3 && marcaDeLampara=="FelipeLamparas"){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.10
    } 
    else if(cantidadDeLamparas==3){
        precioConDescuento=(precioInicial*cantidadDeLamparas)*0.5
    }
    if(precioConDescuento>120){
        ingresosBrutos=(precioConDescuento*0.10);
        precioConDescuento=precioConDescuento+ingresosBrutos
    }
    
    txtIdprecioDescuento.value=precioConDescuento;

}
    