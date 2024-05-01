//13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento
// Analisis de requerimientos:
// Entrada: precio(leer), descuento(leer), precioFinal(proceso)
// Proceso: precioFinal=precio-(precio*descuento/100)
// Salida: precioFinal+" es el precio final del producto con el descuento"
// Seupdocodigo
// Algoritmo precioFinal
//   declarar precio, descuento, precioFinal
//   escribir "Ingrese el precio de un producto"
//   leer precio
//   escribir "Ingrese el porcentaje de descuento"
//   leer descuento
//   precioFinal=precio-(precio*descuento/100)
//   escribir precioFinal+" es el precio final del producto con el descuento"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function precioFinal(){
   let precio, descuento, precioFinal
   precio = +read( "Ingrese el precio de un producto:")
   descuento = +read( "Ingrese el porcentaje de descuento:")
   descuento = (precio*descuento/100)
   precioFinal = (precio-descuento)
   write(`Precio del producto: ${precio} - Descuento: ${descuento} = Precio final, incluyendo descuento: ${precioFinal}`)
}
precioFinal()
