//12.	Pedir 5 números y asignarlos en un arreglo
// Analisis de requerimientos:
// Entrada: definir los numeros ingresados en un arreglo(leer) 
// Proceso: Para i desde 0 hasta 4
//          Escribir "Inserte el número", i+1, ":"
//          Leer numero
//          arreglo [i] = numero
//          FinPara
//          Escribir "Los números ingresados son:"
//          Para i desde 0 hasta 4
//          Escribir arreglo[i]
//          FinPara
// Salida: Mostrar numeros en un arreglo
// Pseudocodigo:
// Algoritmo arreglo
//    Definir arreglo[5]
//    Para i desde 0 hasta 4
//    Escribir "Inserte el número", i+1, ":"
//    Leer numero
//    arreglo [i] = numero
//    FinPara
//    Escribir "Los números ingresados son:"
//    Para i desde 0 hasta 4
//    Escribir arreglo[i]
//    FinPara
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function arreglo(){
    const arreglo = new Array(5)
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = read("Inserte el número "+(i+1) +":")
    }
    write("Los números ingresados son:");
    for (let i =0; i < arreglo.length; i++) {
       write(arreglo[i])
    }
}
arreglo();