function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	do
	{
		var num = parseInt(prompt("Ingrese numero:"));
		respuesta = prompt("Desea seguir ingresando numeros?");

		if(num >= 0)
		{
			positivo = positivo + num;
		}
		else
		{
			negativo = negativo * num;
		}


	}while(respuesta == "si")


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN