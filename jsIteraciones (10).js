function mostrar()
{

	var respuesta = "si";
	var numPositivo = 0;
	var numNegativo = 0;
	var cantPositivo = 0;
	var cantNegativos = 0;
	var cantCero = 0;
	var cantNumPar = 0;
	var promedioPositivo;
	var promedioNegativos;
	var diferencia = 0;
	//isNan = not a number

	while(respuesta!="no")
	{
		var num = parseInt(prompt("Ingrese numero: "));

		if(num < 0)
		{
			if(num % 2 == 0)
			{
				cantNumPar++;
			}
			cantNegativos++;
			numNegativo = numNegativo + num;
		}
		else if(num > 0)
		{
			if(num % 2 == 0)
			{
				cantNumPar++;
			}
			cantPositivo++;
			numPositivo = numPositivo + num;
		}
		else
		{
			cantCero++;
		}

		respuesta = prompt("Desea ingresar otro numero?");
	
	}
	promedioPositivo = numPositivo / cantPositivo;
	promedioNegativos = numNegativo / cantNegativos;
	diferencia = numPositivo + numNegativo;

	document.write("Suma Positivos: " + numPositivo + "<br>");
	document.write("Suma Negativos: " + numNegativo + "<br>");
	document.write("Cantidad Positivo: " + cantPositivo + "<br>");
	document.write("Cantidad Negativos: " + cantNegativos + "<br>");
	document.write("Cantidad Numeros pares: " + cantNumPar + cantCero + "<br>");
	document.write("Promedio de positivos: " + promedioPositivo + "<br>");
	document.write("Promedio de negativos: " + promedioNegativos + "<br>");
	document.write("Cantidad de 0: " + cantCero + "<br>");
	document.write("Diferencia: " + diferencia + "<br>");
	
}//FIN DE LA FUNCIÓN
