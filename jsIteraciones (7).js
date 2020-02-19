function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	do
	{
		contador = parseInt(prompt("Ingrese numero:"));

		respuesta = prompt("Desea seguir ingresando numeros?");
		if(respuesta == "no")
		{
			contador = parseInt(prompt("Ingrese numero:"));
		}
		else
		{
			alert("aaa");
		}
		acumulador = acumulador + contador;
		
	}while(respuesta == "si")

	
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN