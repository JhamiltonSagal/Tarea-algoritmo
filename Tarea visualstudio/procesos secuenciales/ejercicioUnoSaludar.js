//1.  Pedir al usuario su nombre y saludarlo
// Analisis de requerimientos:
// Entrada: nombre(leer), saludar(proceso)
// Proceso: saludar=nombre
// Salida: "Hola"+saludar
// Seupdocodigo:
// Algoritmo Saludar
//   declarar nombre, saludar
//   escribir "ingrese nombre"
//   leer nombre
//   saludar=nombre
//   escribir "Hola"+saludar
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function saludar(){
   let nombre, saludar
   nombre = read("ingrese nombre:")
   saludar = nombre
   write("Hola"+" "+saludar)
}
saludar()
