//5.  Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año
// Analisis de requerimientos:
// Entrada: edad(leer), edadproximoanio(proceso)
// Proceso: edadproximoanio=edad+1
// Salida: edadproximoanio
// Seupdocodigo
// Agoritmo edadproximoanio
// declarar edad, edadproximoanio
// escribir "ingrese edad"
// leer edad
// edadproximoanio=edad+1
// escribir "El proximo anio tendrás"+edadproximoanio+"anios"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function edadproximoanio(){
   let edad, edadproximoanio
   edad = +read("ingrese edad:")
   edadproximoanio = edad+1
   write("El proximo anio tendrás"+" "+edadproximoanio+" "+"anios")
}
edadproximoanio()
