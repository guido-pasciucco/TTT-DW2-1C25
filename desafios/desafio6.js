/* 
DESAFIO 6 - OPTATIVO

✅ 1. CREA UN OBJETO LLAMADO PRODUCTO QUE REPRESENTE UN PRODUCTO DE ECOMMERCE 
✅ 2. ASIGNÁ PROPIEDADES COMO NOMBRE, PRECIO Y CANTIDAD DISPONIBLE
✅ 3. INICIALMENTE, ESTABLECÉ EL NOMBRE DEL PRODUCTO COMO "CAMISETA"
✅ 4. LUEGO, MODIFICÁ LA PROP DEL PRODUCTO PARA CAMBIAR EL NOMBRE A "ZAPATILLAS"
✅ 5. VAMOS A AÑADIR PROPIEDAD "CATEGORIA" CON ALGÚN VALOR QUE LA REPRESENTE
✅ 6. ELIMINA LA PROPIEDAD "CANTDISPONIBLE" USANDO EL OP. DELETE
*/

// puntos 1,2,3
let producto = {
    nombre : "Camiseta",
    precio : 23400,
    cantDisponible : 5
}
console.log(producto)

// punto 4
producto.nombre = "Zapatillas"
console.log(producto)

// punto 5
producto.categoria = "Calzado"
console.log(producto)

// punto 6
delete producto.cantDisponible
console.log(producto)