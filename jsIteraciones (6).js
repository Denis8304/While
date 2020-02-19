function mostrar()
{

	var contador=0;
	var acumulador=0;

	do
	{
		var num = parseInt(prompt("Ingresar numero"));
		acumulador = acumulador + num;
		contador++;
	}
	while(contador < 5)



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN