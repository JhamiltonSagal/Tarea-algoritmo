//4.  Pedir al usuario un número y mostrar su doble
// Analisis de requeriminetos
// Entrada: numero(leer), duplicar(proceso)
// Proceso: duplicar=numero*2
// Salida: duplicar
// Seupdocodigo
// Algoritmo duplicar
// declarar numero, duplicar
// escribir "ingrese numero"
// Leer numero
// duplicar=numero*2
// escribir duplicar
const read = require('prompt-sync')();
const write = console.log

function duplicar(){
let numero, duplicar
numero = read("ingrese numero:")
duplicar = numero*2
write(duplicar)
}
duplicar()
