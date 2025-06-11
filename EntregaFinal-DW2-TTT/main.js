/* PROYECTO FINAL - LÓGICA PRINCIPAL */

// configuramos título y subtítulos
const tituloSitio = document.createElement("h1") 
tituloSitio.id = "titulo" 
contenedor.appendChild(tituloSitio) 
tituloSitio.innerHTML =  `<h1><i>Talento Tienda</i></h1> </h2>Mi primer Ecommerce</h2>` 

// variables que nos avisan si se está o no renderizando el catálogo y el carrito
let prodsIsRender = false // el interruptor en el catálogo no es importante
let carritoIsRender = false // en el carrito sí.

const agregarAlCarrito = (producto) => {
    const prodEncontrado = carrito.find((e) => e === producto);
    prodEncontrado == undefined
        ? carrito.push(producto)
        : prodEncontrado.cantidad += 1
    producto.stock -= 1
    /* para profundizar opcional, crear una lógica que no permita agregar más unidades de las que se tienen en stock */
    renderCarrito()
    renderListaSuper()
}

const renderListaSuper =  ()  =>{ // evento cuando clickeamos el botón de mostrar catálogo
    if (prodsIsRender){  // si ya se estaba mostrando... lo "borramos"
        listaSuper.innerHTML = "" // BORRA EL CONTENIDO del display
        prodsIsRender = false
    }else{ // si no se estaba mostrando previamente, lo renderizamos.
        // establezco el título
        const subtitulo = document.createElement("h2")
        subtitulo.innerText = "Nuestros Productos"
        listaSuper.appendChild(subtitulo)
        // establezco el espacio donde se va a renderizar el carrito
        const displayProductos = document.createElement("div")
        displayProductos.id = "displayProductos"
        listaSuper.appendChild(displayProductos)
        for(producto in arraySuper){
            let thisProd = arraySuper[producto]
            let card = document.createElement("div") 
            card.className = "estiloCard" 
            card.innerHTML += ` 
                <h3>${thisProd.titulo}</h3>
                <p>${thisProd.marca}</p>
                <img src="${thisProd.img}" alt="${thisProd.titulo}" height="100px", width="auto"> 
                <p>$${thisProd.precio}</p>
                <p>Quedan ${thisProd.stock} unidades</p>
            `
            let btnAddCarrito = document.createElement("button")
            btnAddCarrito.innerText = "Agregar al carrito"
            btnAddCarrito.addEventListener("click", () => agregarAlCarrito(thisProd))
            card.appendChild(btnAddCarrito)
            displayProductos.appendChild(card)
        }
        prodsIsRender = true
    }
}

const renderCarrito = () => {
    if (carritoIsRender){  
        listaCarrito.innerHTML = ""
        carritoIsRender = false
    }else{
        // establezco el título
        const subtitulo = document.createElement("h2")
        subtitulo.innerText = "Tu Carrito de compras"
        listaCarrito.appendChild(subtitulo)
        // establezco el espacio donde se va a renderizar el carrito
        const displayCarrito = document.createElement("div")
        displayCarrito.id = "displayCarrito"
        listaCarrito.appendChild(displayCarrito)
        for (producto in carrito){
            let thisProd = carrito[producto]
            let card = document.createElement("div") 
            card.className = "estiloCard" 
            card.innerHTML += ` 
                <h3>${thisProd.titulo}</h3>
                <p>${thisProd.marca}</p>
                <img src="${thisProd.img}" alt="${thisProd.titulo}" height="100px", width="auto"> 
                <p>$${thisProd.precio}</p>
                <p>Cantidad: ${thisProd.cantidad}</p>
            `
            displayCarrito.appendChild(card)
        }
        carritoIsRender = true
    }
}

// CONFIGURAMOS LOS EVENTOS DE LOS BOTONES DE MOSTRAR/OCULTAR CATÁLOGO Y CARRITO

btnCatalogo.addEventListener("click", renderListaSuper)
btnCarrito.addEventListener("click", renderCarrito)