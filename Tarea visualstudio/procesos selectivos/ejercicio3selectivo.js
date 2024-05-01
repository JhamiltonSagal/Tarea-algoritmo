//1.	Pedir al usuario un número y mostrar si es par o impar
// Analisis de requerimientos:
// Entrada: num1(leer), cociente(proceso)
// Proceso:cociente=num1/2
//         si cociente=2 entonces
//         escribir num1+"es par"
//         sino
//         escribir num1+"es impar"
//         finsi
// Salida: mostrar el mensaje
// Seupdocodigo
// Algoritmo cociente
//   declarar num1, cociente
//   escribir "ingrese num1"
//   leer num1
//   cociente=num1/2
//         si cociente=2 entonces
//         escribir num1+"es par"
//         sino
//         escribir num1+"es impar"
//         finsi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function cociente(){
   let num1, cociente
   num1 = +read("ingrese num1:")
   cociente = num1%2
   if (cociente==0){
    write(num1+" es par")
   }
   else{
    write(num1+" es impar")
   }
}
    cociente()
   