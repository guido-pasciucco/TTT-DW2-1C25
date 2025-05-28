/* DESAFIO 8 - OPTATIVO.

1. DECLARAR UN ARRAY DE PRODUCTOS Y RECORRERLO
2. POR CADA PRODUCTO...
    -   CREAR UNA ETIQ. H2 QUE CONTENGA EL NOMBRE
    -   AGREGARLA AL BODY

PISTAS, CONSEJOS.
EN CADA REPETICIÓN... (usen el bucle For in)
    -   SE CREA UN ELEMENTO CON createElement()
    -   SE MODIFICA SU innerText
    -   SE LO AGREGA AL DOM CON appendChild - directo al body

*/

// 1. Declarar un array de productos

let productos = ["Heladera", "Mouse", "Auriculares", "Bicicleta", "Teclado", "Guitarra"]

// 2. por cada producto...
for (let producto in productos){
    let tituloProducto = document.createElement("h2") // ... crear una etiqueta h2 ...
    tituloProducto.innerText = productos[producto] // ... que contenga el nombre...
    document.body.appendChild(tituloProducto) // ... y agregarla al body!
}