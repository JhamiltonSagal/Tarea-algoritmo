//18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, 
//el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar 
//un evento, considerando que al total hay que agregarle el 15% del iva
// Analisis de requerimientos:
// Entrada: costoPlatillo(calculado), personas(leer), iva(calculado), presupuesto(proceso)
// Proceso: si personas<100 entonces
//          costoPlatillo=20*0.15 
//          sino si personas>100<=200
//          costoPlatillo=15*0.15
//          sino
//          personas>200
//          costoPlatillo=10*0.15
//          finsi
// presupuesto=personas + costoPlatiilo + iva
// Salida: presupuesto
// Seupdocodigo
// Algoritmo determinarpresupuesto
// declarar costoPlatillo, personas, iva, presupuesto
// escribir ("Ingrese el numero de personas:")
// leer personas
//          si personas<=100 entonces
//          costoPlatillo=20*0.15 
//          sino si 
//          personas>100<=200
//          costoPlatillo=15*0.15
//          sino
//          personas>200
//          costoPlatillo=10*0.15
//          finsi
// presupuesto=personas + costoPlatiilo + iva
// presupuesto 
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function determinarpresupuesto(){
    let costoPlatillo, personas, iva, presupuesto
    personas = +read("Ingrese el numero de personas:")
    if (personas<=100){
         costoPlatillo = personas*20

    }
    else if (personas<=200){
              costoPlatillo = personas*15
              
    }
    else { 
         costoPlatillo = personas*10
        
    }    
    iva = costoPlatillo*0.15
    presupuesto = costoPlatillo + iva
    write(`Numero de personas:${personas}  Costo por los ${personas} platillos:${costoPlatillo} + IVA:${iva} = Presupuesto:${presupuesto}`)
}
determinarpresupuesto()
