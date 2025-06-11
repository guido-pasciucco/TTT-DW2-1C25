/* 
CLASE 4 - FUNCIONES 

- ✅ Intro. a Funciones
- ✅ Hoisting (solo Javascript)
- ✅ Concepto de Algoritmo
- ✅ Parámetros
- ✅ Return
- ✅ 3 Sintáxis para funciones
        - Tradicional (palabra reservada function + nombre)
        - Anónima 
        - Flecha (Arrow Functions)
- ✅ Scope / alcance de variables
- Desafío 4 juntos

NOTA : DAR EJEMPLOS EN PROFUNDIDAD LA CLASE 5 - ARROW Y CALLBACK, RECURS. ETC.


*/

// FUNCION

/*
qué era una variable?
guardo 1 dato bajo un nombre, en un espacio en memoria

qué es una función
guardo / concentro 1 o varias líneas de código bajo 1 nombre.

- optimizar mi código
    - evito repeticiones
    - puedo reutilizar mi bloque de código
    - mejorar la mantenibilidad del código
    - mejorar la escalabilidad del código
*/

// declarar la función

/* function mensajeDeBienvenida1(){
    console.log("Talento Tech Teens")
    console.log("Curso - Desarrollo Web 2")
    console.log("Miércoles de 10 a 12 hs")
} */

// palabra reservada function
// nombre de mi función
// paréntesis () donde van los parámetros (si hay)
// llaves {} donde va el bloque de código

// llamo a la función
//mensajeDeBienvenida1()

/* 
    HOISTING
    JAVASCRIPT, AL MOMENTO DE EJECUTARSE, "LLEVA PARA ARRIBA" AUTOMÁTICAMENTE TODAS LAS FUNCIONES, HACIENDO POSIBLE QUE YO EJECUTE ANTES DE CREAR UNA FUNCIÓN 
*/

/* 
    ALGORITMO
    un conjunto de instrucciones para lograr x objetivo 
    dividido en 3 etapas
    1. SI ENTRADA de datos externos 
    2. SI PROCESAMIENTO dentro de la lógica del algoritmo
    3. SALIDA - dato concreto procesado 
*/

// AGREGAMOS PARÁMETROS A NUESTRA FUNCIÓN

const mensajeDeBienvenida2 = (nombre, generoUser, curso, dia, horario) => {
    let inicio
    generoUser === "F"
    ? inicio = `Bienvenida ${nombre}`
    : inicio = `Bienvenido ${nombre}`
    return `
        ${inicio} al curso de ${curso}!
        Te esperamos los ${dia} a las ${horario} hs
    `
} 

let nombreUser = prompt("Ingrese nombre")
let generoUser = prompt("Ingrese Genero")
let cursoUser = prompt("Ingrese curso")
let diaUser = prompt("Ingrese dia")
let horarioUser = prompt("Ingrese hora")

console.log(mensajeDeBienvenida2(nombreUser, generoUser, cursoUser, diaUser,horarioUser))
console.log(mensajeDeBienvenida2("Camila", "F", "Java", "Miercoles", "14") + "!!!" )

// SALIDA DE DATOS - RETURN

/* 
    DIFERENCIA SUPER IMPORTANTE
    VISUALIZAR EN PANTALLA NO ES IGUAL A TENER UN RESULTADO FORMAL.
*/


// 1. sintaxis tradicional para funciones

function suma2(n1, n2){
    let res = n1 + n2 + precioFinal
    return res
}


// 2. funciones anónimas (no tiene nombre)

    // ejemplo de declaración, alojándola en una constante

/* const suma3 = function(){
    let res = n1 + n2
    return res
} */
    // ejemplo de ejecución, con params y return

/*  console.log(resultadoSuma + function (resultadoSuma){
    let res = resultadoSuma + 10
    return res
}) */

// 3. Funciones Flechas / Arrow Functions
/* La función flecha nació originalmente como una abreviación de las anónimas, pero con el paso del tiempo se convirtió en el estándar a la hora de declarar funciones. 
- no tienen nombre (no confundir con alojarlas en una constante)
- no usan la palabra reservada function
- nueva sintáxis => entre () y {}
- return implícito, en funciones de 1 sola línea, no hace falta escribir return, se genera automáticamente.
*/

const suma = (n1, n2) => n1 + n2

const multi = (n1, n2) => n1 * n2

const division = (n1, n2) => n1 / n2





function resta(n1, n2){
    return n1 - n2
}

// LOS PARÁMETROS DE LA FUNCIÓN RESTA, SON EJECUCIONES DE LA FUNCION SUMA (QUE COMO TIENEN RETURN, SON NÚMEROS.)

console.log(resta(suma2(26,7), suma2(10,5)))

// console.log(10+5) - quiero que muestres en consola 10+5 = 15


// SCOPE / ALCANCE DE LAS VARIABLES

/* 2 tipos de alcance de una variable

+ GENERAL
    - LEY NACIONAL - APLICA A TODO ARGENTINA (TODAS SUS PROVINCIAS Y MUNICIPIO)
    - LEY PROVINCIAL - APLICA SOLO EN LA PROV. DONDE SE CREÓ (Y TODOS SUS MUNICIPIOS)
    - LEY MUNICIPAL - APLICA SOLO EN EL MUNICIPIO DONDE SE CREÓ
+ ESPECÍFICO

VARIABLES GLOBALES 
    - SON ACCESIBLES EN CADA RINCÓN DEL CÓDIGO
    - NO TIENEN UN BLOQUE {} QUE LAS CONTENGA

VARIABLES LOCALES
    - SOLO EXISTEN DENTRO DEL BLOQUE {} EN EL CUAL FUERON DECLARADAS.
    - FUERA DE ESTE, NO EXISTEN. 
    - PERMITE QUE EXISTAN VARIABLES LOCALES DE MISMO NOMBRE EN DISTINTOS BLOQUES
*/