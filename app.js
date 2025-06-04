/* CLASE 9 - EVENTOS Y PROMESAS - 4/6 */

/* EVENTOS - DECENAS DE SUCESOS QUE OCURREN EN NUESTRO SITIO, EN NUESTRO NAVEGADOR, EN NUESTRA COMPUTADORA 

DE LA TOTALIDAD DE LOS EVENTOS QUE VAN SUCEDIENDO EN MI SITIO
YO ELIJO ALGUNOS PARA ASIGNARLES ACCIONES ESPECÍFICAS (JS)

*/

// declaramos una promesa

let miPromesa = new Promise ((resolve, reject) => {
    // simular una acción que tome tiempo
    // ej. solicitud a un servidor
    // vamos a simularlo con setTimeOut
    setTimeout(()=>{
        let trajoElMate = false // cambiar a false para simular un fallo
        trajoElMate 
        ? resolve("Bien ahi amigo que te acordaste del mate")
        : reject("cheee y el mate?!")
    }, 5000) // simulamos atraso de 5 seg
});

// utilizamos la promesa

miPromesa
.then((res)=>console.log("Exito:", res))
.catch((err)=>console.log("error", err))