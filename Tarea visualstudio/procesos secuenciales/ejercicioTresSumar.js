//3.	Solicitar al usuario dos números y mostrar suma
// Analisis de requerimientos:
// Entrada: num1(leer), num2(leer), sumar(proceso)
// Proceso: sumar=num1+num2
// Salida: sumar
// Seupdocodigo:
// Algortimo sumar
//   declarar num1, num2, sumar
//   escribir "ingrese num1"
//   leer num1
//   escribir "ingrese num2"
//   leer num2
//   sumar=num1+num2
//   escribir sumar
//   FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function sumar(){
   let num1, num2, sumar
   num1 = +read("ingrese num1:")
   num2 = +read("ingrese num2:")
   sumar = num1+num2
   write(sumar)
}
sumar()
