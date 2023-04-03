"use strict";
console.log("Ejercicio 8\n");
function CalcularFactorial(numero) {
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
var num = CalcularFactorial(8);
console.log("El factorial es de ", num);
//# sourceMappingURL=eje8.js.map