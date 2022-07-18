// Math.PI
/*
La propiedad Math.PI es una propiedad estática que
representa la relación entre la longitud de una 
circunferencia de un circulo y su diámetro, la cual es
aproximadamente 3.14159

Sintaxis:
Math.PI;
*/
// Ejemplo
/*
Convertir grados a radianes
*/
function conversion(grados) {
  return grados * (Math.PI / 180);
}
console.log(`45 grados a radianes: ${conversion(45)}`);
