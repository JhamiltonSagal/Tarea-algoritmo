//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros
// Analisis de requerimientos:
// Entrada: distanciaenmetros(leer), distanciaencentimetros(proceso)
// Proceso: distanciaencentimetros=metros*100
// Salida: "La distancia ingresada en metros es igual a"+centimetro+"centimetros"
// Seupdocodigo
// Algortimo distanciaencentimetros
// declarar distanciaenmetros, distanciaencentimetros
// escribir "ingrese distanciaenmetros"
// leer distanciaenmetros
// distanciaencentimetros=distanciaenmetros*100
// escribir "La distancia ingresada en metros es igual a"+distanciaencentimetros+"centimetros"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function distanciaencentimetros(){
   let distanciaenmetros, distanciaencentimetros
   distanciaenmetros = +read("Ingrese distancia en metros:")
   distanciaencentimetros = distanciaenmetros*100
   write("La distancia ingresada en metros, es igual a"+" "+distanciaencentimetros+" "+"centimetros")
}
distanciaencentimetros()