console.log("Ejercicio 7\n");
function esPrimo(a : number) : number
{
    var contador : number = 0;
    for(var i : number = 0 ; i < 4 ; i++)
    {
        if(a % i === 0)
        {
            contador++;
        }
    }
    return contador;
}
var num : number = 1;
var numero : number = esPrimo(num);
console.log(num + "\n");

if(numero === 2 )
{
    console.log("Es un numero primo\n");
}
else
{
    console.log("No es un numero primo");
}
