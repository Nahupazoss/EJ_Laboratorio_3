console.log("Ejercicio 3\n");
function mensajeRepetido(a : number, b ?: string ):void  
{
    if(b)
    {
        for(var i : number = 1; i<= a;i++)
        {
            console.log(b);
        }
    }
    else
    {
        console.log(a.toString().split("").reverse().join(""));
    }
}

var miFuncion : Function = mensajeRepetido;
miFuncion("5","Nahuel");
miFuncion("27");
miFuncion("72");
miFuncion("3");
