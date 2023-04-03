"use strict";
console.log("Ejercicio2\n");
var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var lista2 = [" ", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i = 1; i < 13; i++) {
    if (i in lista) {
        console.log(i);
        console.log(lista2[i], "\n");
    }
}
//# sourceMappingURL=eje2.js.map