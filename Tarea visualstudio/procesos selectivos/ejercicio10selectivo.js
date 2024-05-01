//10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100
// Analisis de requerimientos:
// Entrada: numero(leer), comparar(proceso)
// Proceso: si comparar=numero>100 entonces
//          escribir numero+" es mayor que 100"
//          sino si comparar=numero<100
//          escribir numero+" es menor que 100"
//          sino
//          escribir numero+" es igual 100"
//          finsi
//          escribir "Greacias por su visita"
// Salida: mostar el mansaje
// Seupdocodigo
// Algortimo comparar
//   declarar numero, comparar
//   escribir "ingrese numero"
//   leer numero
//          si comparar=numero>100 entonces
//          escribir numero+" es mayor que 100"
//          sino si comparar=numero<100
//          escribir numero+" es menor que 100"
//          sino
//          escribir numero+" es igual 100"
//          finsi
//          escribir "Gracias por su visita"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function comparar(){
   let numero, comparar
   numero = +read("Ingrese numero:") 
   if (comparar = numero>100) {
         write(numero+" es mayor que 100")
   }
   else if (comparar = numero<100) {
         write(numero+" es menor que 100")
   }
   else {
         write(numero+" es igual 100")
}       
        write("Gracias por su visita")

}
comparar()