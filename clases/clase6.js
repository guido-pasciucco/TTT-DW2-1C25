/* CLASE 6 14/5 

- OBJETOS - otro tipo de colecciones de datos.
    ✅ - intro.
    ✅ - crear un objeto
    ✅ - modif. un objeto
    ✅ - agregar y editar una propiedad
    ✅ - eliminar una propiedad
    ✅ - array de objetos
    ✅ - recorrer y leer un objeto

- OBJETOS PREDEFINIDOS DE JAVASCRIPT
    ✅ - Window
        ✅ - confirm
        ✅ - open
        ✅ - close
        ✅ - postMessage
    - Number
        ✅ - isNaN 
        ✅ - toFixed - agrega x cantidad de decimales a un núm, devuelve string
        ✅ - toString
        ✅ - parseInt - convierte un string en un INT (número sin coma)
        ✅ - parseFloat - convierte un string en un FLOAT (número con coma)

BREAK 5

- REPASO HTML Y CSS - Desarrollo Web 1 
    - HTML
        ✅ - Etiquetas
        ✅ - Atributos
        ✅ - Organización en HTML
            <html>
                <head>
                    configuraciones
                    vinculación con CSS
                </head>
                <body>
                    cuerpo del contenido
                    vinculación con JS
                </body>
            </html>
    - CSS
        ✅ - Estructura de toda regla de estilo
        ✅ - Vincular CSS con HTML

    3 pilares - desarrollo web - frontend
    HTML - ESTRUCTURA DEL SITIO Y DE SU CONTENIDO
    CSS - DISEÑO, ESTÉTICO, GRÁFICO, VISUAL
    JS - FUNCIONALIDAD, INTERACTIVIDAD, DA "VIDA" A LOS SITIOS WEB

*/

/* COLECCIONES DE DATOS - NOS PERMITEN ALOJAR MÁS DE UN DATO, EN UN ÚNICO ESPACIO EN MEMORIA

ARRAYS SE ORGANIZA SECUENCIALMENTE (POR ORDEN DE APARICIÓN) - juntar varios datos
OBJETOS SE ORGANIZAN A TRAVÉS DE PARES CLAVE:VALOR - una entidad con dif. caract.

ej. arrays
nombre1 = "juan"
nombre2 = "pedro"
nombres = ["juan", "pedro"]

ej. objetos
nombre1 = "Juan"
edad1 = 23
persona1 = {
    <<<clave  : valor>>>
    nombre : "Juan",
    edad : 23
    }

CREAR UN OBJETO
    LLAVES 
    {
        clave : valor,
        clave : valor,
        clave : valor,
        clave : valor,
        clave : valor
    }


POO - Programación Orientada a Objetos.
ENTIDADES (OBJETOS) QUE POSEEN X CARACT (PARES CLAVE VALOR) Y MÉTODOS (FN RELACIONADAS A X OBJETO)


marca, modelo, color, cant. puertas, kilometraje, es0km patente, tipoMotor, tieneLlantasAleacion
*/

let auto = {
    marca : "Ford",
    modelo : "Fiesta",
    color: "Azul",
    cantPuertas : 5,
    kilometraje : 123000,
    es0Km : false,
    patente : "ABC123",
    tipoMotor : ["Nafta", "Electrico"],
    tieneLLantasAleacion : true
}

// visualizar todo el objeto
console.log(auto)

// visualizar sólo una propiedad del objeto (dot notation)
console.log(auto.modelo)

// agregar parametro a un objeto pre-existente
auto.tieneStereo = true
auto.year = 2014 

// editar propiedaes (nuevas o pre-existentes)
auto.tieneStereo = false
auto.modelo = "Focus"

// eliminar una propiedad (delete)
delete auto.color

console.log(auto)

// ARRAY DE OBJETOS. 
// combino el orden secuencial de los arrays con el detalle de los objetos

// array de objetos PERSONAS que cada persona tenga nombre, apellido, y edad


let personas = [
    {nombre: "Juan", apellido: "Perez", edad: 40},
    {nombre: "Juana", apellido: "Gomez", edad: 23},
    {nombre: "Luis", apellido: "Gonzalez", edad: 34},
    {nombre: "Pedro", apellido: "Martinez", edad: 18},
    {nombre: "Carlos", apellido: "Perez", edad: 41},
    {nombre: "Juancito", apellido: "Gomez", edad: 60},
    {nombre: "Martin", apellido: "Gomez", edad: 44},
]

// RECORRER LOS OBJETOS - CON BUCLES.

// for in - 1 objeto

for (dato in auto){
    // console.log(dato)  solo aparecen las claves
    // console.log(auto[dato])  aparecen solo los valores
    console.log(`${dato} : ${auto[dato]}`) // aparecen solo los valores
}

// MÉTODO forEach - array de objetos

personas.forEach(e => {
    for(dato in e){
        console.log(`mi ${dato} es : ${e[dato]}`)
    }
});


// OBJETOS PREDEFINIDOS EN JAVASCRIPT
// "EN JAVASCRIPT, TODO ES UN OBJETO"

// window.confirm()      ventana emergente con un mensaje y opciones (confirmar/cancelar)
// window.open("link")   abre una nueva ventana
// window.close()        cierra la ventana actual
// window.postMessage()  envía un menasje a otra ventana o pestaña

/* 
    OBJETO NUMBER - 
        - !isNaN - determina si el valor es de tipo NaN (Not a Number)
            retorna TRUE cuando el valor es NaN y FALSE cuando es un número
            
            let input = Number(prompt("Ingresa un numero"))
            
            !isNaN(input) 
            ? console.log("TODO BIEN, ES UN NÚMERO")
            : console.log("CHE, NO ES UN NÚMERO ESTO, DEBE SER UN STRING")

        - .toFixed() , formatea un número para que tenga x cantidad de núms decimales
        - .toString() - convierte un número en una cadena de texto.
*/

let num = 43

let num2 = num.toFixed(5) // 43.00000
console.log(parseFloat(num2))
console.log(typeof num2) // str

