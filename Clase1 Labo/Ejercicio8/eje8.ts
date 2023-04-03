console.log("Ejercicio 8\n");

function CalcularFactorial(numero : number) : number
{
    var factorial = 1;
    for(var i = 1 ; i <= numero ; i++)
    {
        factorial *= i;
    }
    return factorial;
}
var num : number = CalcularFactorial(8);

console.log( "El factorial es de " , num);