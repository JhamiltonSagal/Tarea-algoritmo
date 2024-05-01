//17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano,
// la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto,
// ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano
// que entrega en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
// Analisis de requerimientos:
// Entrada:precioInicial(leer), tipo(leer), tamanio(leer), totalRecibir(proceso)
// Proceso:si tipo==A
//         entonces
//         tamanio
//         
// Salida:
// Seupdocodigo
// Algoritmo determinarpreciototal
//   declarar precioInicial, tipo, tamanio, totalRecibir
//   escribir "Ingrese Precio Inicial "
//   leer precioInicial
//   escribir "Ingrese tipo"
//   leer tipo
//   escribir "Ingrese tamaño"
//   leer tamanio
//      si tipo==A
//      si tamaño==1
//      entonces totalRecibir=precioInicial+2
//      sino si tamaño==2
//      entonces totalRecibir=precioInicial+3
//      sino si tipo==B
//      si tamanio==1
//      entonces totalRecibir=precioInicial-3
//      sino si tamanio==2
//      entonces totalRecibir=precioInicial-5
//      finsi
//   totalRecibir = precioInicial  tipo  tamanio
//   totalRecibir
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;

function totalRecibir() {
    let precioInicial, kilos, tipo, tamanio, totalxkilo;
    precioInicial = +read("Ingrese precio Inicial por kilo de Banano: ");
    kilos = +read("Kilos de entrega en el embarque: ");
    tipo = read("Ingrese tipo A o B: ");
    tamanio = +read("Ingrese tamaño 1 o 2: ");

    if (tipo === 'A') {
        if (tamanio === 1) {
            totalxkilo = precioInicial + 2;
        } else if (tamanio === 2) {
            totalxkilo = precioInicial + 3;
        }
    } else if (tipo === 'B') {
        if (tamanio === 1) {
            totalxkilo = precioInicial - 3;
        } else if (tamanio === 2) {
            totalxkilo= precioInicial - 5;
        }
    }

    const totalPagar = totalxkilo * kilos;
    write(`Tipo: ${tipo} | Tamaño: ${tamanio} | Precio Inicial: ${precioInicial} | Precio Final: ${totalxkilo} | Kilos: ${kilos} | Total a pagar: ${totalPagar}`);
}

totalRecibir();
