// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// Analisis de requerimientos
// Entrada: arreglo(leer)
// Proceso:Dimensión arreglo(5)
//         Leer arreglo(0)
//         leer arreglo(1)
//         leer arreglo(2)
//         leer arreglo(3)
//         leer arreglo(4)
//         medio <- 2
//         Escribir "El primer elemento es:", arreglo(0)
//         Escribir "El elemento del medio es:", arreglo(medio)
//         Escribir "El último elemento es:", arreglo(4)
// Salida:mostrar mensaje
// Pseudocodigo:
// Algoritmo posicion
//  declarar arreglo (5)
//  escribir "Ingrese el primer elemento para el arreglo:"
//  Leer arreglo(0)
//  escrbir "Ingrese el segundo elemento para el arreglo:
//  leer arreglo(1)
//  escrbir "Ingrese el tercer elemento para el arreglo:"
//  leer arreglo(2)
//  escribir "Ingrese el cuarto elemento para el arreglo:
//  leer arreglo(3)
//  escribir "Ingrese el quinto elemento para el arreglo:"
//  leer arreglo(4)
//  medio = 2
//  Escribir "El primer elemento es:", arreglo(0)
//  Escribir "El elemento del medio es:", arreglo(medio)
//  Escribir "El último elemento es:", arreglo(4)
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function posicion() {
    let arreglo = []
    
    arreglo[0] = +read("Ingrese el primer elemento para el arreglo:")
    arreglo[1] = +read("Ingrese el segundo elemento para el arreglo:")
    arreglo[2] = +read("Ingrese el tercer elemento para el arreglo:")
    arreglo[3] = +read("Ingrese el cuarto elemento para el arreglo:")
    arreglo[4] = +read("Ingrese el quinto elemento para el arreglo:")
    const medio = 2
    write("El primero el elemento es:", arreglo[0])
    write("El elemento del medio es:", arreglo[medio])
    write("El último elemento es:", arreglo[4])
 }
 posicion()
