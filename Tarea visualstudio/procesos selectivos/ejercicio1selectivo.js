//1.	Pedir al usuario un número y mostrar si es mayor o menor que 10
// Analisis de requerimientos:
// Entrada: num1(leer), mayorOmenor(proceso)
// Proceso:mayorOmenor=num1>10
//         si mayorOmenor entonces
//         escribir num1 "es mayor que 10"
//         sino
//         escribir num1 "es menor que 10"
//         finsi
// Salida: mostrar el mensaje
// Seupdocodigo
// Algoritmo mayorOmenor
//   declarar num1, mayorOmenor
//   escribir "ingrese num1"
//   leer num1
//   mayorOmenor=num1>10
//         si mayorOmenor entonces
//         escribir num1 "es mayor que 10"
//         sino
//         escribir num1 "es menor que 10"
//         finsi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function mayorOmenor(){
   let num1, mayorOmenor
   num1 = +read("ingrese num1:")
   mayorOmenor = num1>10
   if (mayorOmenor){
            write(num1+" "+"es mayor que 10")
   }
   else{
            write(num1+" "+"es menor que 10")    
   }
}
mayorOmenor()