//12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA
// Analisis de requerimientos:
// Entrada: totalFactura(leer), iva(leer), totalPagar(proceso)
// Proceso: totalPagar=totalFactura+(totalFactura*iva/100)
// Salida: totalPagar+" es el monto total a pagar incluyendo IVA"
// Seupdocodigo
// Algoritmo totalPagar
//   declarar totalFactura, iva, totalPagar
//   escribir "Ingrese monto total de su factura"
//   leer totalFactura
//   escribir "ingrese el porcentaje de IVA"
//   leer iva
//   totalPagar=totalFactura+(totalFactura*iva/100)
//   escribir totalPagar+" es el monto total a pagar incluyendo IVA"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function totalPagar(){
   let totalFactura, iva, totalPagar
   totalFactura = +read("Ingrese monto total de su factura:")
   iva = +read("Ingrese el porcentaje de IVA:")
   iva = totalFactura*iva/100
   totalPagar = totalFactura+iva
   write(`Monto total de su factura: ${totalFactura} + IVA: ${iva} = Total ha pagar incluyendo IVA: ${totalPagar}`)
}
totalPagar()