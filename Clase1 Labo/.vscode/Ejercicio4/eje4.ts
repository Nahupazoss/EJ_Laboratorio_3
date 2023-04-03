console.log("Ejercicio 4\n");
function esImparPar(a : number)
{
    if(a % 2 === 0)
    {
        console.log("El numero " + a + " es par,siendo" + a + "el numero recibido como parametro\n" );
    }
    else
    {
        console.log("El numero " + a + " es impar,siendo" + a + "el numero recibido como parametro\n" );    
    }
}

esImparPar(2);
esImparPar(3);
esImparPar(32);
esImparPar(24);