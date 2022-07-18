// Math.abs(x)
/*
El método abs(x) es un método estático del objeto Math,
el cual recibe como parámetro un numero y regresa su valor
absoluto y el valor absoluto de un numero es el mismo 
numero pero con signo positivo, es decir que regresa
el valor numérico sin tener en cuenta su signo.

Sintaxis:
Math.abs(x);

Parámetro:
x: Un numero cualquiera

Notas:
- Si se pasa un string no numérico o una variable 
indefinida (empty) retorna NaN (No es un número).
- Si se pasa un null (Un valor nulo o "vacío") retorna 0
*/
// Ejemplo
var x = Math.abs("-1");
console.log(x); // 1
var x2 = Math.abs(-2);
console.log(x2); // 2
var x3 = Math.abs(null);
console.log(x3); // 0
var x4 = Math.abs([10, 20]);
console.log(x4); // NaN
