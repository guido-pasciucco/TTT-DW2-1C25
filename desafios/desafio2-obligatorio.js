/* 
DESAFIO 2 - OBLIGATORIO

CONSIGNA
- CREA 3 VARIABLES
    1. PARA ASIGNAR EL NOMBRE DEL PRODUCTO - nombreProducto
    2. PARA EL PRECIO POR UNIDAD - precioUnitario
    3. LA QUE ALMACENA LA CANTIDAD DESEADA POR EL USUARIO - cantDeseada
- CREA UN PROMPT DONDE SE LE PREGUNTE AL USUARIO LA CANT. QUE DESEA COMPRAR Y QUE ESA RESPUESTA SE ALMACENE EN CANTIDAD DESEADA
- CALCULAR EL COSTO TOTAL DE LA COMPRA (precioUnitario * cantDeseada)
- UTILIZA ALERT PARA INFORMAR AL USUARIO SOBRE EL COSTO TOTAL DE SU COMPRA.
*/

// DESAFIO 2 APLICANDO PROMPT Y ALERT

let nombreProducto = prompt("Ingrese el nombre del producto")
let precioUnitario = prompt("Ingrese el precio del producto")
let cantDeseada = prompt("Ingrese la cantidad de unidades a comprar")

let precioFinal = precioUnitario * cantDeseada

alert(`Vas a comprar ${cantDeseada} ${nombreProducto}s`)
alert(`El precio final es de $${precioFinal}`)