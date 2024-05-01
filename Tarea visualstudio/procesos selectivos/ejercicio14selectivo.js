//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Analisis de requerimientos:
// Entrada: nota(leer), determinar(proceso)
// Proceso: determinar=nota>=60
//          si determinar entoces
//          escribir "Usted ha aprobado su examen"
//          sino
//          escribir "Usted ha reprobado su examen"
//          finsi
// Salida: mostrar el mensaje
// Seupdocodigo
// Algortimo determinar
//   declarar nota, determinar
//   escribir "Ingrese su nota de examen"
//   leer nota
//   determinar=nota>=60
//          si determinar entoces
//          escribir "Usted ha aprobado su examen"
//          sino
//          escribir "Usted ha reprobado su examen"
//          finsi
// FinAlgortimo
const read = require('prompt-sync')();
const write = console.log

function determinar(){
   let nota, determinar
   nota = +read("Ingrese su nota de examen:")
   determinar = nota>=60
   if (determinar){
    write("Usted ha aprobado su examen")
   }
   else {
    write("Usted ha reprobado su examen")
   }
}
determinar()
