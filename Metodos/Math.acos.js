// Math.acos(x)
/*
El método acos(x) es un método estático del objeto Math,
el cual recibe como parámetro un numero
y retorna el valor inverso del coseno (arco coseno en 
radianes).

Sintaxis:
Math.acos(x);

Parámetro:
x: Un numero cualquiera

Notas:
- Las funciones trigonométricas como: sin(), cos(), tan(),
asin(), acos(), atan(), atan2() el resultado que devuelven
representa a los ángulos en radianes, si se quiere convertir
de radianes a grados simplemente se debe de dividir entre 180. 
- El método Math.acos(x) devuelve un valor numérico entre un 
rango de 0 a PI radianes para x entre -1 y 1, si dicho valor
de x esta fuera de dicho rango  (-1 a 1) devolverá NaN (No
es un número). 
*/
// Ejemplos
var x = Math.acos(-100);
console.log(x); // NaN
var x2 = Math.acos(0.5);
console.log(x2); // 1.0471975
var x3 = Math.acos(0.7);
console.log(x3); // 0.79539
