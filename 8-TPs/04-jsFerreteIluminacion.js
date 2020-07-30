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
    precioInicial=35;
    var cantidadDeLamparas;
 cantidadDeLamparas= parseInt(txtIdCantidad.value);
    var marcaDeLampara;
    marcaDeLampara=Marca.value;
    var subTotal;
    subTotal = cantidadDeLamparas * precioInicial;
    var precioConDescuento;
    precioConDescuento = subTotal;
    txtIdprecioDescuento.value = precioConDescuento;
    var ingresosBrutos;
    precioConDescuento=txtIdprecioDescuento.value;
   
    var precioTotal;

    if(cantidadDeLamparas>=6){
        precioConDescuento= subTotal * 0.5;
    
    } else {
        if(cantidadDeLamparas===5){
        switch(marcaDeLampara){
            case "ArgentinaLuz":
                precioConDescuento= subTotal * 0.6;
                break;
                default:
                precioConDescuento= subTotal * 0.7;
                break;
        }
    } else {
        if(cantidadDeLamparas===4){
            switch(marcaDeLampara){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precioConDescuento= subTotal * 0.75;
                    break;
                default:
                    precioConDescuento = subTotal * 0.80;
                    break;
            }
        } else {
            if(cantidadDeLamparas===3){
                switch(marcaDeLampara){
                    case "ArgentinaLuz":
                    precioConDescuento = subTotal * 0.85;
                    break;
                    case "FelipeLamparas":
                    precioConDescuento = subTotal * 0.90;
                    break;
                    default:
                    precioConDescuento = subTotal * 0.95;
                    break;
                }
            }
        }
    }
}

    if(precioConDescuento>=120){
    ingresosBrutos = precioConDescuento * 0.10;
    alert("Usted pagó" + ingresosBrutos + " de Ingresos Brutos");
    } else {
    ingresosBrutos = 0;
    }
	
	precioTotal = precioConDescuento + ingresosBrutos;
}
