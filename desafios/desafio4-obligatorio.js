/* 
DESAFIO 4 - OBLIGATORIO

Consigna:

✅ CREA UNA FUNCION LLAMADA sumarProductos() 
    ✅ Que acepte 2 parámetros
        - ✅ precioUnitario
        - ✅ cantidadDeseada
    ✅ La función debe calcular y devolver (return) el total gastado en un producto 
    ✅ multiplicando el precio x la cant comprada
*/

const sumarProductos = (precioUnit, cantDeseada) => precioUnit * cantDeseada

let inputPrecio = Number(prompt("Ingrese el precio del producto"))
let inputCantidad = Number(prompt("Ingrese la cantidad de unidades del producto"))

console.log(sumarProductos(inputPrecio, inputCantidad))


