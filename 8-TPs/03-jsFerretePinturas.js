/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var temperaturaConvertida;
    
    temperatura=txtIdTemperatura.value;
    temperatura=parseFloat(temperatura);


    temperaturaConvertida= temperatura - 32;
    temperaturaConvertida= temperaturaConvertida * 5/9;
    temperaturaConvertida= parseInt(temperaturaConvertida);

    alert("La temperatura en grados Centígrados es " + temperaturaConvertida);
    
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var temperaturaConvertida;

    temperatura=txtIdTemperatura.value;
    temperatura=parseInt(temperatura);

    temperaturaConvertida= temperatura * 9/5;
    temperaturaConvertida= temperaturaConvertida + 32;
    temperaturaConvertida= parseFloat(temperaturaConvertida);

    alert("La temperatura en grados Fahrenheint es " + temperaturaConvertida);

}
