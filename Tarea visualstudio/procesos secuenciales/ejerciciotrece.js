// 13. Dado un arreglo de 5 nombres y presentarlos todos.
// Entrada:nombre(leer)
// Proceso:Para i<-0 hasta 4
//          arreglo<-numero
//         FinPara
// Salida: mostrar mensaje

// Pseudocodigo:
// Algoritmo arreglonombres
//  nombres

//  Para i<-0 Hasta 4 Hacer
//   Escribir 'nombre'
//   Leer nombre
//   arreglo<-numero
//  FinPara
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function arreglonombres(){
    const arreglo = []
    for (let i = 0; i < 5; i++) {
       nombre = read("Ingrese un nombre:")
        arreglo.push(nombre)
    }
   write(arreglo)
}

arreglonombres()