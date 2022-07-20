// Math.atan(x)
/*
El método atan(x) es un método estático del objeto Math,
el cual recibe como parámetro un numero
y retorna el valor inverso del la tangente (arco tangente en 
radianes).

Sintaxis:
Math.atan(x);

Parámetro:
x: Un numero cualquiera

Notas:
- Las funciones trigonométricas como: sin(), cos(), tan(),
asin(), acos(), atan(), atan2() el resultado que devuelven
representa a los ángulos en radianes, si se quiere convertir
de radianes a grados simplemente se debe de dividir entre 180. 
- El método Math.acos(x) devuelve un valor numérico entre un 
rango de -PI/2 a PI/2 radianes para x entre -1 y 1, si dicho valor
de x esta fuera de dicho rango  (-1 a 1) devolverá NaN (No
es un número). 
*/
// Ejemplos
var x = Math.atan(1);
console.log(x); // 0.7853981
var x2 = Math.atan(0);
console.log(x2); // 0
var x3 = Math.atan(-0);
console.log(x3); // -0
var x4 = Math.atan(0.5);
console.log(x4); // 0.523598
var x5 = Math.atan(Infinity);
console.log(x5); // 1.5707963267948966 (PI/2)
var x6 = Math.atan(-Infinity);
console.log(x6); // -1.5707963267948966 (-PI/2)
