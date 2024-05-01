//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes
// Analisis de requerimientos:
// Entrada: num1(leer), num2(leer), difrencia(proceso)
// Proceso: diferencia=num1==num2
//            si diferencia entonces
//            escribir "Los numeros ingresados son iguales"
//            sino
//            escribir "Los numeros ingresados son diferentes"
//            finsi      
//Salida: mostrar mensaje  
// Seupdocodigo   
// Algortimo diferencia
//   declarar num1, num2, diferencia
//   escribir "ingrese num1"
//   leer num1
//   escribir "ingrese num2"
//   leer num2
//   diferencia=num1==num2
//              si diferencia entonces
//              escribir "Los numeros ingresados son iguales"
//              sino
//              escribir "Los numeros ingresados son diferentes"
//              finsi       
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function diferencia(){
   let num1, num2, diferencia
   num1 = +read("ingrese num1:")
   num2 = +read("ingrese num2:")
   diferencia = num1==num2
if (diferencia){
          write("Los numeros ingresados son iguales")
} 
else{
          write ("Los numeros ingresados son diferentes") 
}    

}
diferencia()
