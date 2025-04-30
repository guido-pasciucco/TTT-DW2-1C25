/* DESAFIO 4
Consigna:
CREA UNA FUNCION LLAMADA sumarProductos() 
    que acepte 2 params
        - precioUnitario
        - cantidadDeseada
    La función debe calcular y devolver (return) el total gastado en un producto 
    multiplicando el precio x la cant comprada
*/

const sumarProductos = (precio, cantidad) => `precio final: $${precio * cantidad}`

// probar la función / ejecutarla
// con datos hardcodeados
    console.log(sumarProductos(23000, 5))
// con prompts
    let inputPrecio = prompt("Ingrese precio")
    let inputCantidad = prompt("Ingrese cantidad")
    console.log(sumarProductos(inputPrecio, inputCantidad))
    
