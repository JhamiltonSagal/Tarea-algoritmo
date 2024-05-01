//6.  Solicitar al usuario un carácter y mostrar si es una vocal o consonante
// Analisis de requerimientos:
// Entrada: caracter(leer)
// Proceso:Si caracter == "a" O caracter == "e" O caracter == "i" O caracter == "o" O caracter== "u"
//          entonces
//          Escribir "El carácter ingresado es una vocal."
//         Sino si (caracter >= "a" Y caracter <= "z") Entonces
//          Escribir ("El carácter ingresado es un consonante.")
//         Sino
//          Escribir ("El carácter ingresado no es una letra.")
//         FinSi
// Salida: mostrar mensaje
// Pseudocodigo:
// ALgoritmo mostrar
// declaraar mostrarcaracter
//  Escribir "Ingrese un carácter: "
//  Leer caracter
//  Si caracter == "a" O caracter == "e" O caracter == "i" O caracter == "o" O caracter== "u"
//   Escribir "El carácter ingresado es una vocal."
//  Sino si (caracter >= "a" && caracter <= "z") Entonces
//   Escribir ("El carácter ingresado es un consonante.")
//  Sino
//   Escribir ("El carácter ingresado no es una letra.")
//  FinSi
// FinAlgortitmo

const read = require('prompt-sync')();
const write = console.log

function mostrarcaracter(){
    let caracter
    caracter  = read("Ingrese un carácter:");
    if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u")
    {
        write("El carácter ingresado es una vocal.")
    }
    else if(caracter >= "a" && caracter <="z"){
        write("El carácter ingresado es una consonante.")
    }
    else{
        write("El carácter ingresado no es una letra.")
    }
}

mostrarcaracter();