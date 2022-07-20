// Math.cbrt(x)
/*
El método cbrt(x) es un método estático del objeto Math,
el cual recibe como parámetro un numero
y retorna la raíz cubica de dicho numero.

Sintaxis:
Math.cbrt(x);

Parámetro:
x: Un numero cualquiera
*/
// Ejemplos
var x = Math.cbrt(1);
console.log(x); // 1
var x2 = Math.cbrt(8);
console.log(x2); // 2
var x3 = Math.cbrt(0);
console.log(x3); // 0
var x4 = Math.cbrt(null);
console.log(x4); // 0
var x5 = Math.cbrt(Infinity);
console.log(x5); // Infinity
var x6 = Math.cbrt(10);
console.log(x6); // 2.154434690031884
var x7 = Math.cbrt("Hello!");
console.log(x7); // NaN
