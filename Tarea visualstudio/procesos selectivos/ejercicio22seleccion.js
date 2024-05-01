// 22.Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Entrada: arregloSumaElementos = [54,71,77,9,30]
// Proceso: arregloSumaElementos = arregloSumaElementos[0] + arregloSumaElementos[1] + arregloSumaElementos[2] + arregloSumaElementos[3] + arregloSumaElementos[4]
// Salida: suma_total

// Pseudocódigo:
// Algoritmo suma
//  Definir num1, num2, num3, num4, num5, Total Entero
//  num1=54; num2=71; num3=77; num4=9; num5=30; suma_total=0
//  Escribir num1,", ", num2,", ", num3,", ", num4,", ", num5
//  total = num1+num2+num3+num4+num5
//  Escribir "Dado el siguiente arreglo:"
//  Escribir "[", num1,", ", num2,", ", num3,", ", num4,", ", num5, "]"
//  Escribir "La suma es: ", suma_total
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log;

function suma(){
    let arregloSumaElementos = [54,71,77,9,30], suma_total = 0
    suma_total = arregloSumaElementos[0] + arregloSumaElementos[1] + arregloSumaElementos[2] + arregloSumaElementos[3] + arregloSumaElementos[4]
    write("Dado el siguiente arreglo:")
    write(arregloSumaElementos)
    write("La suma de los elementos anteriormente ingresados es: ", suma_total )
}

suma();