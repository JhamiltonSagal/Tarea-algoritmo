//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual
// Analisis de requerimientos:
// Entrada:sueldoMensual(leer), sueldoAnual(proceso) impuesto(calculado), sueldoNeto(proceso)
// Proceso:sueldoAnual=SueldoMensual*12
//         si sueldoAnual>30000
//         entonces
//         impuesto=sueldoAnual*0.15
//         sino
//         impuesto=0
//         finsi
// sueldoNeto= sueldoAnual - impuesto
// Salida:sueldoNeto
// Seupdocodigo
// Algoritmo sueldo
//   declarar sueldoMensual, sueldoAnual, impuesto, sueldoNeto
//   escribir "Ingrese Sueldo Mensual"
//   leer sueldoMensual
//   sueldoAnual=sueldoMensual*12
//         si sueldoAnual>30000
//         entonces
//         impuesto=sueldoAnual*0.15
//         sino
//         impuesto=0
//         finsi
// sueldoNeto=sueldoAnual - impuesto
// sueldoNeto
const read = require('prompt-sync')();
const write = console.log

function sueldo(){
   let sueldoMensual, sueldoAnual, impuesto, sueldoNeto
   sueldoMensual = +read("Ingrese Sueldo Mensual:")
   sueldoAnual = sueldoMensual*12
    if (sueldoAnual>30000){
       impuesto = sueldoAnual*0.15
   }
    else {
       impuesto = 0
    }
    sueldoNeto = sueldoAnual - impuesto
    write(`Sueldo Anual:${sueldoAnual} - Impuesto ha pagar:${impuesto} = Sueldo Neto Anual:${sueldoNeto}`)
}
sueldo()