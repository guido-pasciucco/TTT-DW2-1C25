/*
CLASE 3 
- ✅ Prompt y Alert
OPERADORES
- ✅ MATEMÁTICOS / ARITMÉTICOS
- ✅ DE COMPARACIÓN
- ✅ COMPUESTOS
CONTROL DE FLUJOS
- ✅ CONDICIONALES IF / ELSE IF / ELSE
- ✅ LÓGICOS - ejemplos boliche y tarj sube
- OPERADORES TERNARIOS - abreviación del if-else
*/

/* 
METODOS DE JS 
    - console.log(variable) - visualizar en consola alguna variable.
    - alert(variable) - visualizar en el viewport a modo de ventana emergente alguna variable.
    - confirm(variable) - similar al alert, pero con mayor control de la resp del user
    - prompt("Ingrese su nombre")
        espacios (vent emerg) donde el usuario puede ingresar información (SIEMPRE VA A SER STRING POR DEFECTO)
*/


// DESAFIO 2 APLICANDO PROMPT Y ALERT
/* let nombreProducto = prompt("Ingrese el nombre del producto")
let precioUnitario = prompt("Ingrese el precio del producto")
let cantDeseada = prompt("Ingrese la cantidad de unidades a comprar")
let precioFinal = precioUnitario * cantDeseada
alert(`Vas a comprar ${cantDeseada} ${nombreProducto}s`)
alert(`El precio final es de $${precioFinal}`) */

// alt gr


/* los operadores son SIMBOLOS que tiene una función asociada

esta función se trabaja con los datos que tienen adelante, atrás o ambas


10 + 5  => 15
operador: + , suma
lo que tiene atras y adelante : los numeros que va a sumar

*/

// OPERADORES - 3 TIPOS

/* let n1 = 20
let n2 = 20 */

// 1. MATEMÁTICOS - devuelven datos NUMÉRICOS
 /*    console.log(n1 +  n2) // (+)  SUMA 
    console.log(n1 -  n2) // (-)  RESTA
    console.log(n1 *  n2) // (*)  MULTIPLICACIÓN
    console.log(n1 /  n2) // (/)  DIVISIÓN
    console.log(n1 %  n2) // (%)  RESTO DE UNA DIVISIÓN
    console.log(n1 ** n2)  */// (**) POTENCIA
// 2. Op. de Comparación - DEVUELVEN BOOLEANO 
    // 2.a. me sirven también para String
        /* console.log(n1 == n2) // == | Igual que. solo compara el valor, ignora el tipo de dato
        console.log(n1 === n2) // === | ESTRICTAMENTE igual que. compara el valor y tipo de dato
        console.log(n1 != n2) // !=   | DISTINTO DE 
        console.log(n1 !== n2) */ // !== | ESTRICTAMENTE DISTINTO DE 
    // 2.b. solo funcionan con datos numéricos
    /* console.log("-------------------------")
        console.log(n1 > n2)  // >  Mayor que
        console.log(n1 < n2)  // <  Menor que
        console.log(n1 >= n2) // >= Mayor o igual que
        console.log(n1 <= n2)  */// <= Menor o igual que
// 3. Op. Compuestos - Operación matemática + Asignar resultado
    /* console.log(n1 +=  n2) // (+=)  SUMA y asignación
    console.log(n1 -=  n2) // (-=)  RESTA y asignación
    console.log(n1 *=  n2) // (*=)  MULTIPLICACIÓN y asignación
    console.log(n1 /=  n2) // (/=)  DIVISIÓN y asignación
    console.log(n1 %=  n2) // (%=)  RESTO DE UNA DIVISIÓN y asignación
    console.log(n1 **= n2) */ // (**=) POTENCIA y asignación
    // ejemplo
    /* let numero1 = 10
    console.log(numero1)
    numero1 = numero1 + 2
    numero1 += 2
    console.log(numero1) */
// 4. Op. Lógicos - se suelen usar para agrupar condiciones
    // && AND - Conjunción
        // La condición es TRUE solo cuando todas sus partes son TRUE
        /* 
            T + T = T 
            T + F = F
            F + T = F
            F + F = F
        */
    // || OR  - Disyunción
        // La condición es TRUE si por lo menos una de sus partes es TRUE
        /* 
            T + T = T 
            T + F = T
            F + T = T
            F + F = F
        */
    // !  NOT - Negación
        /* SI TENEMOS ALGO QUE ES TRUE, LE PONEMOS ! Y SE HACE FALSE 
            let esEstudiante = true
            console.log(esEstudiante) - true
            console.log(!esEstudiante) - false (not es estudiante)
        */

// EJEMPLO AND - entrada boliche - 2 condiciones - +18 y DNI en mano

// BOLICHE - +18 - 2AM
// MATINEE - 14-17 - 7PM - 2da opción, se ejecuta cuando la 1ra falló

let edadUser = 26
let dniEnMano = false

const verifEdad = () =>{
    if (edadUser >= 18){
        console.log("Podes pasar al BOLICHE")
    } else if (edadUser >= 14 && edadUser <= 17 ){
        console.log("Podes pasar a la MATINEE")
    } else {
        console.log("No Podes pasar a nada")
    }
}
dniEnMano ? verifEdad() : console.log("NO TENES DNI, COMO CHEQUEO TU EDAD?")


// EJEMPLO OR - SUBE con descuento
// estudiantes o jubilados

let esEstudiante = false
let esJubilado = false

/* if (esEstudiante || esJubilado){
    console.log("Podes acceder al descuento")
}else{
    console.log("No aplicas al descuento en la SUBE")
} */


// CONDICIONALES -----------------------------------------------

/* 

mayor de edad para entrar a un boliche

si tu edad es mayor o igual a 18...
    - podes pasar
sino... (es decir, si es falso)
    - no podes pasar

CONDICIÓN A EVALUAR - true 
- Bloque de código a ejecutar si la condición es TRUE

*/


// CONDICIONAL SIMPLE - SINTAXIS TRADICIONAL
/* if (esEstudiante || esJubilado){
    console.log("Podes acceder al descuento")
}else{
    console.log("No aplicas al descuento en la SUBE")
} */

// CONDICIONAL SIMPLE - OPERADOR TERNARIO
esEstudiante || esJubilado ?
    console.log("T - Podes acceder al descuento")
:
    console.log("T - No aplicas al descuento en la SUBE")





// OPERADOR TERNARIO - ABREVIACIÓN PARA LOS COND. SIMPLES. - ES6

/*
    estructura de un if-else tradicional
    
    if(condicion){
        valor si es true
    }else{
        valor si es false
    }

    Estructura de un operador ternario

    condicion ? valor si es true : valor si es false
*/


