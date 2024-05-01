//8.  Pedir al usuario su nombre y mostrarlo tres veces en la pantalla
// Analisis de requerimientos:
// Entrada: nombre(leer)
// Proceso: 
// Salida: nombre, nombre, nombre
// Seupdocodigo
// Algoritmo nombre
//   declarar nombre
//   escribir "ingrse nombre"
//   leer nombre
//   escribir nombre, nombre, nombre
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function nombre(){
   let nombre
   nombre = read("ingrese nombre:")
   write(nombre, nombre, nombre)
}
nombre()