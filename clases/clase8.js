/* CLASE 8 - DOM PARTE 2 - 28/5 


DOM - DOCUMENT OBJECT MODEL - MODELO DE OBJETOS DEL DOCUMENTO

- createElement("div") - crear una nueva etiqueta, que debemos ubicarla en el DOM
- APPEND CHILD - ubicar una etiqueta dentro del html
- REMOVE

*/


/* createElement("p") 

- Crea una nueva etiqueta (o nodo) PERO!!! no está conectada desde el primer momento al arbol de nodos del DOM
- .isConnected - método que nos informa si x elemento está o no conectado al DOM (bool)
- Necesitamos conectarla a través del método appendChild() "anexar"

*/

const contenedor = document.getElementById("contenedor")

// Creamos 2 nodos de ejemplo y los llenamos de texto con .innerText

let nuevoSubtitulo = document.createElement("h4")
nuevoSubtitulo.innerText = "Clase 8!!!"

let textoRandom = document.createElement("p")
textoRandom.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veniam laudantium accusantium esse asperiores atque modi ducimus. Impedit alias consectetur aspernatur tempore ad vitae, voluptas nemo nulla fuga ex optio!"

// Chequeamos si están conectados (False)
console.log(nuevoSubtitulo.isConnected) 

// trabajamos appendChild - UNIMOS a estos 2 elementos con un contenedor padre
contenedor.appendChild(nuevoSubtitulo)
contenedor.appendChild(textoRandom)

console.log(nuevoSubtitulo.isConnected) // che, este nodo está conectado al dom? si o no


// .remove() borra del DOM el elemento que seleccionemos
textoRandom.remove() 

/* DOM - COPIA DINÁMICA DEL HTML QUE ES LA QUE SE RENDERIZA EN EL NAVEGADOR*/
// console.log(document) - OBJETO DOCUMENT - TIENE TODO EL DOM (EL HTML)