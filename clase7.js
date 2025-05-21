/* CLASE 7 - DOM 21/5 

"Llamar a elementos del HTML en nuestro Javacript"
    - getElementById()
    - getElementsByClassName() - devuelven más de un dato (si hay más de un dato)
    - getElementsByTagName() - devuelven más de un dato (si hay más de un dato)
    - querySelector()
        - querySelector("#titulo") - id
        - querySelector(".darkMode") - clase
        - querySelector("div") - etiqueta
ID - COMUNICACIÓN ENTRE HTML Y JS
CLASES - COMUNICACIÓN ENTRE HTML Y CSS

*/

// LLAMAR A UN ELEMENTO POR SU ID - 2 POSIBILIDADES
    // getElementById("titulo")
    // querySelector("#titulo")

/* const titulo = document.getElementById("titulo")
const listaSuper = document.getElementsByClassName("listaSuper")
const items = document.getElementsByTagName("li") */

const titulo = document.querySelector("#titulo")
const listaSuper = document.querySelector(".listaSuper")
const items = document.getElementsByTagName("li")

console.log(titulo)
console.log(listaSuper)

titulo.style.fontFamily = "Arial, Helvetica, sans-serif"
titulo.style.backgroundColor = "yellow"

let isMayorDeEdad = true



// MODIFICAR TEXTO EN UNA ETIQ. HTML

console.log(titulo.innerText)

// innerText - texto plano
// innerHTML - HTML funcional

let displayProductos = document.getElementById("displayProductos")

let arraySuper = [
    {titulo: "Galletitas", marca: "Arcor",         precio: "2500", stock: 20, img: "https://arcorencasa.com/wp-content/uploads/2024/10/20241009-13575.webp"},
    {titulo: "Jugo",       marca: "Clight",        precio: "1100", stock: 8,  img: "https://http2.mlstatic.com/D_814568-MLA71565613555_092023-C.jpg"},
    {titulo: "Huevos",     marca: "Avicoop",       precio: "4200", stock: 3,  img: "https://avicoper.com/wp-content/uploads/2020/08/prod-plus.jpg"},
    {titulo: "Pan",        marca: "Bimbo",         precio: "2300", stock: 4,  img: "https://images.pricely.ar/images/1/7793890261189.jpg"},
    {titulo: "Arroz",      marca: "Gallo",         precio: "1800", stock: 9,  img: "https://maxiconsumo.com/media/catalog/product/cache/dee42de555cd0e5c071d2951391ded3b/2/4/241.jpg"},
    {titulo: "Manteca",    marca: "La Serenisima", precio: "3040", stock: 12, img: "https://acdn-us.mitiendanube.com/stores/093/780/products/captura-de-pantalla-2023-01-16-0926591-24096d2c6eb92d86e416738720437467-640-0.png"},
    {titulo: "Gaseosa",    marca: "Pepsi",         precio: "3500", stock: 16, img: "https://i5.walmartimages.com/asr/29b4d9fc-ce2b-4d86-ab2b-93e73f1c36fe.a135c1b041c68f4c7987c9141b0d346f.jpeg"},
    {titulo: "Leche",      marca: "Tregar",        precio: "1600", stock: 21, img: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3261968_f.jpg"},
]

for (producto in arraySuper){
    let nuevoEstilo = `
        background-color: bisque;
        margin: 10px;
        padding: 30px;
        text-align: center;
    `
    let thisProd = arraySuper[producto]
    displayProductos.innerHTML += `
        <div style="${nuevoEstilo}">
            <h3>${thisProd.titulo}</h3>
            <p>${thisProd.marca}</p>
            <img src="${thisProd.img}" alt="${thisProd.titulo}" height="100px", width="auto"> 
            <p>$${thisProd.precio}</p>
            <p>Quedan ${thisProd.stock} unidades</p>
            <button>Agregar al carrito</button>
        </div>
    `
}
