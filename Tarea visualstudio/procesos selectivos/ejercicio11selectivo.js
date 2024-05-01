//11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito
// Analisis de requerimientos:
// Entrada: numero(leer), digito1(proceso)
// Proceso: digito1=numero>=9
//          si digito1 entonces
//          escribir "El numero+numero+" es un numero de un solo digito"
//          sino
//          escribir "El numero+numero+" no es un numero de un solo digito"
//          finsi
//          escribir "Gracias por su visita"
// Salida: mostar el mansaje
// Seupdocodigo
// Algortimo digito1
//   declarar numero, digito1
//   escribir "ingrese numero"
//   leer numero
//   digito1=numero>=9
//          si digito1 entonces
//          escribir "El numero "+numero+" es un numero de un solo digito"
//          sino
//          escribir "El numero "+numero+" no es un numero de un solo digito"
//          finsi
//          escribir "Gracias por su visita"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function digito1(){
   let numero, digito1
   numero = +read("Ingrese un numero:")
   digito1 = numero>=0 && numero<=9
   if(digito1){
    write("El numero "+numero+" es un numero de un solo digito")
   }
   else {
    write("El numero "+numero+" no es un numero de un solo digito")
   }
   write("Gracias por su visita")

}
digito1()