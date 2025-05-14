/* 
CLASE 5 - 7/5

- ✅ COLECCIONES DE DATOS
    - ✅ ARRAYS
    - 🔜 OBJETOS (la clase que viene)
- BUCLES
    - ✅ 2 ramificaciones - FOR Y WHILE
    - ✅ FOR
    - ✅ Variación FOR tradicional para leer arrays (deprecado)
    - ✅ FOR IN
    - ✅ .forEach()
    - ✅ WHILE
    - ✅ DO WHILE

    - ✅ BREAK 5 MINUTOS

    - REPASO TEMAS Y CLASES ANTERIORES
        - PIENSEN TEMAS QUE QUIERAN REPASAR, LOS ESCRIBEN EN EL CHAT Y LOS REPASAMOS.

        - funciones 00
            - return
        - git 00
            - crear un repo local y sincronizarlo con uno remoto



    - RESOLUCIÓN DE DESAFÍOS OBLIGATORIOS (2, 4 y 5)
    - Hoy, quien pueda, afterClass
    - VIERNES 9 A 13HS - "GUARDIA" DE DUDAS Y CONSULTAS


*/

// COLECCIÓN DE DATOS
/* nos permite almacenar en un único espacio en memoria (en una sola variable), varios datos ordenados de algún modo */

/* VARIABLES Y CONSTANTES - LIMITACIÓN > SOLO SE PUEDE ALMACENAR 1 DATO
ARRAYS / LISTAS / ARREGLOS - 3, 5, 10, 400 DATOS EN UNA ÚNICA VARIABLE
*/



// aplicando arrays
let nombres = ["Marcos", "Lucia", "Gabriel", "Marcela", "Martina"]
// posición         0        1       2
// elemento         1        2       3

// la posición SIEMPRE SE CUENTA DESDE 0

// cómo se organizan los datos dentro de esta colección?
/* posición - organización es secuencial -  */

// llamo a todos los elementos del array - al array completo
/* console.log(nombres) */

// llamo a solamente un elemento del array, lo llamo por su POSICIÓN
/* console.log(nombres[0]) */


/* LOS ARRAYS TIENEN TODO UN MENÚ DE MÉTODOS NATIVOS DE JS PARA MANIPULARLOS */

/* 
AGREGA UN DATO
    unshift - al principio del array
    push - al final del array

ELIMINA UN DATO
    shift - al principio del array
    pop - al final del array
*/
/* nombres.unshift("Carlos")
nombres.push("Guido")
nombres.shift()
nombres.pop() */


// BUCLES - CICLOS

/* Estructuras de control de flujo que nos permiten repetir código y ahorrar lineas de codigo en el proceso */


// for - se basan en la iteración

// quiero repetirlo 5 veces

/* 
    for (inicio, fin, actualizacion){
        bloque de código a repetir
    } 
*/

/* for(let i = 1; i <= 5 ; i++){
    console.log("Hola mundo!")
} */


// FOR IN - Ciclo
// quiero repetir el console log POR CADA NOMBRE EN EL ARRAY DE NOMBRES

// forma vieja de lograrlo - no la recomiendo
/* for(let i = 0; i < nombres.length ; i++){
    console.log(`Hola ${nombres[i]}`)
} */

// forma actual de lograrlo - for...in

// por cada nombre en el array de nombres...
// generá el console log saludando

/* for (let i in nombres) {
    console.log(`Hola ${nombres[i]}`)
} */

// forEach - método para arrays de JS que funciona como un ciclo

/* console.log(nombres.forEach(
    (i)=> console.log(`Hola ${i}`)
)) */

// WHILE -------------------------------------

/* 
    LOS CICLOS WHILE SE BASAN EN EL CUMPLIMIENTO O NO DE UNA CONDICIÓN.

    EN LOS BUCLES WHILE NOSOTROS ESTABLECEMOS UNA CONDICIÓN
        - MIENTRAS ESA CONDICIÓN SE CUMPLA, EL BLOQUE DE CÓDIGO DE NUESTRO WHILE SE VA A EJECUTAR
        - CUANDO DEJE DE SER TRUE LA CONDICIÓN, YA NO SE EJECUTA MÁS EL BLOQUE DE CÓDIGO DEL WHILE
        - SUPER IMPORTANTE: EVITAR BUCLES INFINITOS. (CUANDO LA CONDICIÓN SIEMPRE ES TRUE.) CUANDO YO TRABAJO UN BUCLE WHILE, TENGO QUE ASEGURARME DE QUE EN ALGÚN MOMENTO LA CONDICIÓN VA A SER FALSE.
*/

let numero = 26

// WHILE    - SE EJECUTA CERO O MÁS VECES - PUEDE NUNCA EJECUTARSE.
// WHILE - SIEMPRE SE COMPRUEBA LA CONDICIÓN PRIMERO

console.log("Hola while")
while (numero <= 5){
    console.log("El número es: " + numero)
    numero++
}
console.log("Chau")


// DO WHILE - SE EJECUTA UNA O MÁS VECES - SI O SI SE EJECUTA LA 1RA VEZ.
// DO WHILE - LA 1ER VUELTA OCURRE ANTES DE LA 1RA COMPROBACIÓN

console.log("Hola do while")
do{
    console.log("El número es: " + numero)
    numero++
}while (numero <= 5)
console.log("Chau")