//9.	Solicitar al usuario un número y mostrar si es divisible por 2
// Analisis de requerimientos:
// Entrada: numero(leer), residuo(proceso)
// Proceso:residuo=numero%2
//         si residuo==0 entonces
//         escribir numero+" es divisible por 2"
//         sino
//         escribir numero+" no es divisible por 2"        
//         finsi
//         escribir "Gracias por su visita"
// Salida: mostrar el mensaje
// Seupdocodigo
// Algoritmo residuo
//   declarar numero, residuo
//   escribir "Ingrese numero"
//   leer numero
//   residuo=num1%2
//         si cociente==0 entonces
//         escribir numero+" es divisible por 2"
//         sino
//         escribir numero+" no es divisible por 2"        
//         finsi
//         escribir "Gracias por su visita"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function residuo(){
   let numero, residuo
   numero = +read("Ingrese numero:")
   residuo = numero%2
   if (residuo==0){
    write(numero+" es divisible por 2")
   }
   else{
    write(numero+" no es divisible por 2")
   }
    write("Gracias por su visita")
}
    residuo()
   