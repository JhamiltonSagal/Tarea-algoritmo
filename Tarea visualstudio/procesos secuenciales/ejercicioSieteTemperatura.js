//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit
// Analisis de requerimientos:
// Entrada: gradoscelsius(leer), gradosfahrenheit(proceso)
// Proceso: gradosfahrenheit=gradoscelsius*9/5+32
// Salida: "La temperatura en grados Fahrenheit es de"+gradosfahrenheit
// Seupdocodigo
// Algoritmo gradosfahrenheit
//   declarar gradoscelsius, gradosfahrenheit
//   escribir "ingrese gradoscelsius"
//   leer gradoscelsius
//   gradosfahrenheit=gradoscelsius*9/5+32
//   escribir "La temperatura en grados Fahrenheit es de"+gradosfahrenheit
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function gradosfahrenheit(){
   let gradoscelsius, gradosfahrenheit
   gradoscelsius = +read("ingrese gradoscelsius:")
   gradosfahrenheit = gradoscelsius*9/5+32
   write("La temperatura en grados Fahrenheit es de"+" "+gradosfahrenheit)
}
gradosfahrenheit()