/* 
JAVASCRIPT - CLASE 2 DW2 
    - ✅ VINCULACIÓN HTML con JS
    - ✅ VARIABLES Y CONSTANTES
    - ✅ TIPOS DE DATOS
    - ✅ CONCATENACIÓN DE VARIABLES y Strings (+)
    - ✅ Plantillas literales (si o si comilla invertidas)
    - ✅ SUMA (+) Y RESTA (-) DE VARIABLES
    - ✅ CURIOSIDADES / COMPORTAMIENTOS DE JS
    - ✅ SINTAXIS BÁSICA
        - let variables - declarar y asignar tanto junto como separado
        - const constantes - siempre hacemos los 2 pasos juntos
        - console.log() método de js para visualizar cosas en la consola
        - = - operador de asignación - asigno dato a una variable o constante
        - op. + suma o concat dependiendo de los datos que maneja
        - sintaxis plantillas literales - backticks y ${}
*/

/* 
luego         - TIPOS DE DATOS
Luego         - DATOS
LO MÁS BÁSICO - 0s y 1s*/



/* los datos los almacenamos en VARIABLES 

las variables son ESPACIOS EN MEMORIA
Temporalmente y de manera aleatoria, el procesador elige un espacio de los millones que tiene la memoria RAM, para alojar un dato, con un nombre específico.

Memoria RAM - MEMORIA DE ACCESO ALEATORIO - Guardar info. temporalmente
*/

// 1. declaramos nuestra variable (let)
//let edad = 30
// elegir al azar un locker y pegarle la etiqueta "edad" en la puerta.
// PERO NO GUARDÉ NINGÚN DATO. SOLO DEJÉ EL ESPACIO LISTO PARA SER USADO

// 2. Le asignamos un valor (un dato) a esa variable (=)
// "la variable edad es igual a el dato 30"
// guardar el dato 30 en el locker previamente etiquetado como "edad"
//console.log(edad)
//edad = 45 // sobreescribir el valor de la variable (pisé el valor anterior)
// console.log(edad)

/* 
TANTO VARIABLES COMO CONSTANTES SON PARA GUARDAR UN DATO EN UN ESPACIO EN MEMORIA. 

LA DIFERENCIA ENTRE ELLAS ES QUE
- let - VARIABLES - Mutables - puede cambiar el contenido de la variable
- const - CONSTANTES - Inmutables - NO puede cambiar el contenido de la constante

*/


//const precio = 1500 // declaré y asigné el valor en una misma linea (2x1)
//console.log(precio)
// precio = 3500 // NO SE PUEDE, TIRA ERROR porque es constante
// console.log(precio)

/* 
TIPOS DE DATOS primitivos (los más básicos)
- Numéricos
    - int (entero) - numero sin coma (20, 3000, -13)
    - float (con decimal) - numero CON coma (20.5, 3000.23, -13.30)
- Boolean
    - true 1 si verdadero
    - false 0 no falso
- String 
    - cadena (unión) de CARACTERES.
    - sirve para armar mensajes
*/
let nombre = `Pedro` // ej. String
let edad = 20
let curso = 'PHP'               // ej. int
// let precio = 4000.50        // ej. float
// let esEstudiante = true     // ej. boolean

// forma tradicional - concatenar 3 strings con  3 variables
/* console.log(
"Hola "+nombre+", tenes "+edad+" años y sos parte del curso de "+curso
) */
// forma actual - plantillas literales - usar 1 solo string e insertarle variables donde las necesitamos.
console.log(
`Hola ${nombre}, tenes ${edad} años y sos parte del curso de ${curso}`
)

// Hola (nombre) tenes (edad) años y sos parte del curso de (curso)


// es estudiante? si / no
// camelCase - estoEsUnEjemploDeCamelCase
    // 1er palabra toda en minuscula
    // 2da palabra en adelante - 1er letra mayus, resto minus
    // todo junto, sin espacios


// @ - alt 64 - codigo ASCII del caracter

// comillas invertidas `` alt gr + }


/* 
OPERADOR +
DISTINTO COMPORTAMIENTO DE ACUERDO A LOS DATOS QUE OPERA

numero + numero | 10     + 5       = 15          | suma
string + numero | "hola" + 10      = "hola10"    | concatena
numero + string | 10     + "mundo" = "10mundo"   | concatena
string + string | "hola" + "mundo" = "holamundo" | concatena

*/

console.log(10+4) // suma SOLAMENTE CUANDO ESTAMOS ENTRE 2 NUM
console.log("hola"+" "+"mundo") 
console.log("hola"+10)
console.log(10+"mundo")


console.log(10-4)

/* tipos de operadores que vemos la clase que viene
- op. aritméticos o matemáticos
- op. de comparación
- op. lógicos

*/

let numero1 = 51
let numero2 = "51"

console.log(numero1 == numero2)
// ¿che, 50 y "50" son iguales?

console.log(numero1 === numero2)
// ¿che, 50 y "50" son ESTRICTAMENTE iguales?