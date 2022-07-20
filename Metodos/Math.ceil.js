// Math.ceil(x)
/*
El método ceil(x) es un método estático del objeto Math,
el cual recibe como parámetro un numero
y un numero entero más cercano o igual más proximo a un 
número dado.

Sintaxis:
Math.ceil(x);

Parámetro:
x: Un numero cualquiera

Nota:
- Por ejemplo sí dicho método recibe como parámetro el numero
4.3, dicho método retornara el numero más cercano, es decir
retornara el numero 5.
- El signo no importa, por ejemplo si el método recibe como 
parámetro el numero -2.999, el método retornara el numero
-3.
- También debemos de recordar que el método puede recibir 
string, por ejemplo si recibe como parámetro "2.999", el
método retornara 3, pero no puede recibir símbolos o letras
salvo palabras reservadas como null o infinity.
- En el caso que reciba como parámetros letras o símbolos
que no sean palabras reservadas, el método retornara NaN
(No es un número).
*/
// Ejemplos
var x = Math.ceil(23.8);
console.log(x); // 24
var x2 = Math.ceil(4.99999);
console.log(x2); // 5
var x3 = Math.ceil(-5.9999);
console.log(x3); // -5
var x4 = Math.ceil(null);
console.log(x4); // 0
var x5 = Math.ceil(Infinity);
console.log(x5); // Infinity
var x6 = Math.ceil(0.8989898);
console.log(x6); // 1
var x7 = Math.ceil("Hello!");
console.log(x7); // NaN
