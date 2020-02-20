function mostrar()
{
	
	var num1 = parseInt(prompt("Ingrese numero:"));
	var min = parseInt(num1);
	var max = parseInt(num1);
	var respuesta = prompt("Desea ingresar otro numero?");

	while(respuesta != 'no')
	{
		num1 = parseInt(prompt("Ingrese numero:"));
				
		if(num1 > max)
		{
			max = num1;
		}
		else if(num1 < min)
		{
			min = num1;
		}
		
	respuesta = prompt("Desea ingresar otro numero?");
	
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}
