//2.	Pedir dos palabras y presentarlas concatenadas
// Analisis de requerimientos:
// Entrada: palabra1(leer), palabra2(leer), concatenar(proceso)
// Proceso: concatenar=palabra1+palabra2
// Salida: concatenar
// Seupdocodigo:
// Algoritmo unir
//   declarar palabra1, palabra2, concatenar
//   escribir "ingrese palabra1"
//   leer palabra1
//   escribir "ingrese palabra2"
//   leer palabra2
//   concatenar=palabra1+palabra2
//   escribir concatenar
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function unir(){
   let palabra1, palabra2, concatenar
   palabra1 = read("ingrese palabra1:")
   palabra2 = read("ingrese palabra2:")
   concatenar = palabra1 +" "+ palabra2
   write(concatenar) 
}
unir()