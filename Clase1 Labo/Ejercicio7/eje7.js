"use strict";
console.log("Ejercicio 7\n");
function esPrimo(a) {
    var contador = 0;
    for (var i = 0; i < 4; i++) {
        if (a % i === 0) {
            contador++;
        }
    }
    return contador;
}
var num = 1;
var numero = esPrimo(num);
console.log(num + "\n");
if (numero === 2) {
    console.log("Es un numero primo\n");
}
else {
    console.log("No es un numero primo");
}
//# sourceMappingURL=eje7.js.map