/* DESAFIO 5 - OBLIGATORIO

APLICAMOS BUCLES Y ARRAYS

✅ 1. CREAR UN ARRAY DE PRODUCTOS
✅ 2. MOSTRAR SU CONTENIDO CON UN BUCLE FOR IN, CON CONSOLE.LOG
✅ 3. AGREGAR UN PRODUCTO AL STOCK - Métodos:
    .push("nuevoProd")
    .unshift("nuevoProd")
✅ 4. QUITAR UN PRODUCTO DEL STOCK - Métodos:
    .pop()
    shift()
*/

let productos = ["Heladera", "Lavarropas", "Microondas", "Tostadora"]

console.log(productos) // console.log de el array completo

// propio de for in - variable responde a CADA DATO POR SEPARADO DEL ARRAY
// EN CADA VUELTA CAMBIA.

for (let producto in productos){
    console.log(productos[producto]) // console.log de cada producto por separado
}

// aplicar .push para agregar un producto al final del array

productos.push("Pava Eléctrica")
console.log(productos)

// aplicar .pop para quitar un producto al final del array
// productos.pop()

// aplicar .shift para quitar un producto al comienzo del array
productos.shift()

console.log(productos)