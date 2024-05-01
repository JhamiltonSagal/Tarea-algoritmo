//2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad
// Analisis de requerimientos:
// Entrada: edad(leer), mayorOmenoredad(proceso)
// Proceso:mayorOmenoredad=edad>=18
//         si mayorOmenoredad entonces
//        escribir "Usted tiene la edad de"+edad+", entonces es mayor de edad"
//         sino
//         escribir "Usted tiene la edad de"+edad+", entonces es menor de edad"
//         finsi
// Salida: mostrar el mensaje
// Seupdocodigo
// Algoritmo mayorOmenoredad
//   declarar edad, mayorOmenoredad
//   escribir "ingrese su edad"
//   leer edad
//   mayorOmenoredad=edad>=18
//         si mayorOmenoredad entonces
//         escribir "Usted tiene la edad de"+edad+", entonces es mayor de edad"
//         sino
//         escribir "Usted tiene la edad de"+edad+", entonces es menor de edad"
//         finsi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function mayorOmenoredad(){
   let edad, mayorOmenoredad
   edad = +read("ingrese su edad:")
   mayorOmenoredad = edad>=18
   if (mayorOmenoredad){
            write("Usted tiene la edad de "+edad+", entonces es mayor de edad")
   }
   else{
            write("Usted tiene la edad de "+edad+", entonces es menor de edad")
   }
}
mayorOmenoredad()