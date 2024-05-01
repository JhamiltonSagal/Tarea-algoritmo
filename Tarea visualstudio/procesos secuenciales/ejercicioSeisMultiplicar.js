//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos
// Analisis de reuqerimientos
// Entrada: num1(leer), num2(leer), multiplicar(proceso)
// Proceso: multiplicar=num1*num2
// Salida: multiplicar
// Seupdocodigo
// Algoritmo multipliccar
// declarar num1, num2, multiplicar
// escribir "ingrese num1"
// leer num1
// escribir "ingrese num2"
// leer num2
// multiplicar=num1*num2
// escribir multiplicacion
const read = require('prompt-sync')();
const write = console.log

function multiplicar(){
   let num1, num2, multiplicar
   num1 = read("ingrese num1:")
   num2 = read("ingrese num2:")
   multiplicar = num1*num2
   write(multiplicar)
}
multiplicar()

