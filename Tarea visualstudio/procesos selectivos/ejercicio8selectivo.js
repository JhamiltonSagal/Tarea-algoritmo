//8.	Pedir al usuario un número y mostrar si es múltiplo de 3
// Analisis de requerimientos:
// Entero:numero(leer),reciduo(calcular)
// Proceso:reciduo = numero % 3
//      si reciduo==0 entonces
//         escribir "numero es multiplo 3"
//      sino
//         escribir "numero no es multiplo 3"
//      finsi
//      escribir "Gracias por su visita..."
// Salida: mostrar el mensaje
// Seupdocodigo
// Algoritmo mutiplo3
//   declarar numero, reciduo
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 3
//   si reciduo==0 entonces
//     escribir "numero es multiplo 3"
//   sino
//     escribir "numero no es multiplo 3"
//   finsi
//   escribir "Gracias por su visita..."
// FinAlgoritimo
const read = require('prompt-sync')();
const write = console.log

function multiplo3(){
  let numero, reciduo
  numero = +read("Ingrese numero: ")
  reciduo = numero % 3
  if (reciduo == 0) {
    write(numero," es multiplo 3")
  }  
  else{
    write(numero," no es multiplo 3")
  }
    write("Gracias por su visita...")
  
}
multiplo3()
