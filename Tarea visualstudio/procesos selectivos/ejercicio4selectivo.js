//4.	Solicitar al usuario un número y mostrar si es positivo o negativo
// Analisis de requerimientos:
// Entrada: numero(leer), positivonegativo(proceso)
// Proceso:positivonegativo=numero>=0
//         si positivonegativo entonces
//         escribir numero "es positivo"
//         sino
//         escribir num1 "numero es negativo"
//         finsi
// Salida: mostrar el mensaje
// Seupdocodigo
// Algoritmo positivonegativo
//   declarar numero, positivonegativo
//   escribir "ingrese numero"
//   leer numero
//   positivonegativo=numero>=0
//         si positivonegativo entonces
//         escribir numero "es positivo"
//         sino
//         escribir num1 "numero es negativo"    
//         finsi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function positivonegativo (){ 
   let numero, positivonegativo
   numero = +read("ingrese numero:")
   positivonegativo = numero>=0
   if (positivonegativo){
            write(numero+" es positivo")
   }
   else{
            write(numero+" es negativo")    
   }
}
positivonegativo()