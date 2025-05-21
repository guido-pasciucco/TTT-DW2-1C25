/* 
DESAFIO 7 - OBLIGATORIO 
CONSIGNA
"EN ESTE DESAFÍO, SIMULAREMOS UN CAMBIO DE PRECIO EN UN PRODUCTO DE UN E-COMMERCE"

... en el HTML...
✅ 1. CREA UN ARCHIVO HTML BÁSICO QUE CONTENGA
    1.1. UN TÍTULO (H1)
    1.2. UN PÁRRAFO (P)
✅ 2. AMBAS ETIQ. DEBEN TENER ID
    2.1. PARA EL H1 - "nombreProducto"
    2.2. PARA EL P - "precioProducto"

... en el JS ...
✅ 3. AL CARGAR LA PÁGINA, QUEREMOS QUE EL PRECIO INICIAL DE $500 CAMBIE A $450, UTILIZANDO LAS PROPIEDADES
    - getElementById()
    - innerText
✅ 4. TAMBIÉN PODEMOS MODIFICAR LOS ESTILOS DEL TÍTULO MEDIANTE
    - querySelector()
    - le cambiamos el color al título
*/

// 3.1. Llamamos al precio del producto 
const precioProducto = document.getElementById("precioProducto")

// 3.2. cambiamos el precio desde el DOM
precioProducto.innerText = "$450"

// 4.1. llamamos al título con querySelector
const nombreProducto = document.querySelector("#nombreProducto")

// 4.2. cambiamos el estilo del título desde el DOM
nombreProducto.style.color = "red"