//7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
// Analisis de requerimientos:
// Entrada: nombre1(leer) nombre2=(leer)
// Proceso:nombre1 <- ConvertirAMinusculas(nombre1)
//         nombre2 <- ConvertirAMinusculas(nombre2)
//         Si nombre1 == nombre2 entonces
//           Escribir "Los nombres insertados son iguales."
//         Sino Si nombre1 > nombre2 entonces
//           Escribir "El primer nombre es mayor alfabéticamente que el segundo nombre."
//         Sino Si nombre1 > nombre2 entonces
//           Escribir "El primer nombre es menos alfabéticamente que el segundo nombre."
//         FinSi
// Salida: mostrar mensaje
// Pseudocodigo
// ALgoritmo igualdad
//  Escribir "Con su permiso, escriba el primer nombre: "
//  Leer nombre1
//  Escribir "Inserte el segundo nombre, Por favor: "
//  Leer nombre2
//  nombre1 <- ConvertirAMinusculas(nombre1)
//  nombre2 <- ConvertirAMinusculas(nombre2)
//  Si nombre1 == nombre2 entonces
//    Escribir "Los nombres insertados son iguales."
//  Sino Si nombre1 > nombre2 entonces
//    Escribir "El primer nombre es mayor alfabéticamente que el segundo nombre."
//  Sino Si nombre1 > nombre2 entonces
//    Escribir "El primer nombre es menos alfabéticamente que el segundo nombre."
//  FinSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function igualdad() {
    let nombre1, nombre2;
    nombre1 = read("Ingrese el primer nombre: ");
    nombre2 = read("Ingrese el segundo nombre: ");
    nombre1 = nombre1.toLowerCase();
    nombre2 = nombre2.toLowerCase();
    if (nombre1 === nombre2) {
        write("Los nombres insertados son iguales.");
    } else if (nombre1 > nombre2) {
        write("El primer nombre es mayor alfabéticamente que el segundo.");
    } else if (nombre1 < nombre2) {
        write("El segundo nombre es mayor alfabéticamente que el primero.");
    }
}

igualdad();

