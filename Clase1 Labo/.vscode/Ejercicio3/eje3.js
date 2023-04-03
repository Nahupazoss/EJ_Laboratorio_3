"use strict";
console.log("Ejercicio 3\n");
function mensajeRepetido(a, b) {
    if (b) {
        for (var i = 1; i <= a; i++) {
            console.log(b);
        }
    }
    else {
        console.log(a.toString().split("").reverse().join(""));
    }
}
var miFuncion = mensajeRepetido;
miFuncion("5", "Nahuel");
miFuncion("27");
miFuncion("72");
miFuncion("3");
//# sourceMappingURL=eje3.js.map