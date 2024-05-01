// 21.Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor.
// Entrada: NumeroMayor = [50, 10, 12]
// Proceso:  Si NumeroMayor1 > NumeroMayor2 Y NumeroMayor1 > NumeroMayor3 Entonces
//             Escribir NumeroMayor1, " es el elemento mayor."
//           Sino Si NumeroMayor2 > NumeroMayor1 Y NumeroMayor2 > NumeroMayor3 Entonces
//             Escribir NumeroMayor2, " es el elemento mayor."
//           Sino
//             Escribir NumeroMayor3, " es el elemento mayor."
//           FinSi
// Salida: mostrar mensaje
// Pseudocodigo:
// Algoritmo elementomayor
//  definir NumeroMayor1, NumeroMayor2, NumeroMayor3 Como Entero
//  NumeroMayor1 <- 50
//  NumeroMayor2 <- 10
//  NumeroMayor3 <- 12
//  Escribir NumeroMayor1, ",", NumeroMayor2, ",", NumeroMayor3
//  Si NumeroMayor1 > NumeroMayor2 Y NumeroMayor1 > NumeroMayor3 Entonces
//    Escribir NumeroMayor1, " es el elemento mayor."
//  Sino Si NumeroMayor2 > NumeroMayor1 Y NumeroMayor2 > NumeroMayor3 Entonces
//    Escribir NumeroMayor2, " es el elemento mayor."
//  Sino
//    Escribir NumeroMayor3, " es el elemento mayor."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function elementomayor(){
    let NumeroMayor = [50, 10, 12];
    
    if (NumeroMayor[0] > NumeroMayor[1] && NumeroMayor[0] > NumeroMayor[2]){
        write(NumeroMayor[0], " es el elemento mayor.");
    }
    else if (NumeroMayor[1] > NumeroMayor[0] && NumeroMayor[1] > NumeroMayor[2]){
        write(NumeroMayor[1], " es el elemento mayor.");
    }
    else{
        write(NumeroMayor[2], " es el elemento mayor.");
    }
}

elementomayor();