//15.	Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. 
//Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final
// Analisis de requerimientos:
// Entrada:precioVenta(leer), anioFabricacion(leer), descuento(proceso), precioFinal(proceso)
// Proceso:si anioFabricacion<2010 
//                   entonces
//          descuento=precioVenta*010
//          sino
//          descuento=0
//          finsi
//          precioFinal = PrecioVenta - descuento
// Salida: Precio Final
// Seupdocodigo
// Algortimo ventaVehiculo
//   declarar precioVenta, anioFabricacion, descuento, precioFinal
//   escribir "Ingrese el Precio de Venta"
//   leer precioVenta
//   escribir "Ingrese Año de fabricacion"
//   leer anioFabricacion
//          si anioFabricacion<2010 
//          entonces
//          descuento=precioVenta*010
//          sino
//          descuento=0
//          finsi
//          precioFinal = PrecioVenta - descuento
//   precioFinal
// FinAlgoritimo
const read = require('prompt-sync')();
const write = console.log

function ventaVehiculo(){
    let precioVenta, anioFabricacion, descuento, precioFinal
    precioVenta = +read("Ingrese el Precio de Venta:")
    anioFabricacion = +read("Ingrese Año de fabricacion:")
    if (anioFabricacion<2010){
        descuento = precioVenta*0.10
    }
    else{
        descuento = 0
    }
    precioFinal = precioVenta - descuento
    write(`Precio Venta: ${precioVenta} - Descuento: ${descuento} = Precio final: ${precioFinal}`)
}
    ventaVehiculo()
    