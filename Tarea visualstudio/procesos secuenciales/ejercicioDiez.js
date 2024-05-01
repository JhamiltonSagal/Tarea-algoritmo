//10.	Pedir al usuario dos números y mostrar el mayor
// Analisis de requerimientos:
// Entrada:num1(leer), num2(leer), mayor(proceso)
// Proceso:num1>num2
//         si mayor entonces
//         escribir "El numero mayor es num1
//         sino
//         escribir "El numero mayor es num2
// finsi
// Salida:mostrar el mensaje
// Seupdocodigo
// Algoritmo mayor
// declarar num1, num2, mayor
// escribir "ingrese num1"
// leer num1
// escribir "ingrese num2"
// leer num2
// mayor= num1>num2
//         si mayor entonces
//         escribir "El numero mayor es num1
//         sino
//         escribir "El numero mayor es num2
// FinAlgoirtmo
const read = require('prompt-sync')();
const write = console.log

function mayor(){
let num1, num2, mayor
num1 = +read("ingrese num1:")
num2 = +read("ingrese num2:")
mayor = num1>num2
if(mayor){
        write ("El numero mayor es"+" "+num1)
}
         else{
        write ("El numero mayor es"+" "+num2)
}
}
mayor()