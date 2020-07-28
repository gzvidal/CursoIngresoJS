function mostrar()
{
	var numeroRandomUno;
	var numeroRandomDos;
	var totalUno;
	var totalDos;
	var totalTres;
	var totalCuatro;
	var min;
	var max;
	
	totalUno=0
	totalDos=0
	totalTres=0
	totalCuatro=0
	max=52;
	min=1;
	numeroRandomUno = Math.floor(Math.random()* (52-1))+1 
	numeroRandomDos = Math.floor(Math.random()* (52-1))+1
	
	
	if(numeroRandomUno%2==0 || numeroRandomDos%2==0){
		totalUno= numeroRandomUno*numeroRandomDos
		alert("Dado que uno de los dos números es par, la multiplicación da un total de: "+ totalUno);
	} else {
		totalDos= numeroRandomUno-numeroRandomDos
		alert("Dado que uno de los dos numeros es impar, la resta da un total de: " + totalDos);
	} 
	if(numeroRandomUno%5==0){
		totalTres= Math.pow(numeroRandomUno,3)
		alert("Dado que el número es divisible por 5, su elevación al cubo es " + totalTres);
	}
	if(numeroRandomDos%5==0){
		totalCuatro= Math.pow(numeroRandomDos,3);
		alert("Dado que el número es divisible por 5, su elevación al cubo es " + totalCuatro);
	}
 	if(totalUno==0&&totalDos==0&&totalTres==0&&totalCuatro==0){
		 alert("No pasó nada");
	 }
	
}