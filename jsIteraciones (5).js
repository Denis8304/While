function mostrar()
{
    
    do
    {
        var sexo = prompt("Ingrese sexo 'f' o 'm'");

    }while(sexo != "f" && sexo != "m")

document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN