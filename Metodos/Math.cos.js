// Math.cos(x)
/*
El método cos(x) es un método estático del objeto Math,
el cual recibe como parámetro un numero que representan
el angulo en radianes y el método nos retorna el coseno
de dicho angulo especificado como parámetro.

Sintaxis:
Math.cos(x);

Parámetro:
x: Un numero cualquiera que representa el valor de un angulo
en radianes.

Nota:
- El método Math.cos(x) retorna un valor entre -1 y 1.
- También debemos de recordar que el método puede recibir 
string, por ejemplo si recibe como parámetro "45", el
método retornara 0.525321, pero no puede recibir símbolos o letras
salvo palabras reservadas como null o infinity.
- En el caso que reciba como parámetros letras o símbolos
que no sean palabras reservadas, el método retornara NaN
(No es un número).
*/
// Ejemplos
var x = Math.cos(1);
console.log(x); // 0.540302
var x2 = Math.cos(30);
console.log(x2); // 0.15425144
var x3 = Math.cos(45);
console.log(x3); // 0.525321
var x4 = Math.cos(2);
console.log(x4); // -0.41614
var x5 = Math.cos(Infinity);
console.log(x5); // NaN
var x6 = Math.cos("Hello!");
console.log(x6); // NaN
