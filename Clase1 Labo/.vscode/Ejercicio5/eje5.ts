console.log("Ejercicio 5\n");

function mostrarNombreApellido(a : string , b : string)
{
    var cadena : string = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    console.log(b.toUpperCase(), "," ,cadena);
}

mostrarNombreApellido("nahuel","pazos");

