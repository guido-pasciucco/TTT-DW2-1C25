let nombreProducto = prompt("Ingrese el nombre del producto")
let precioUnitario = prompt("Ingrese el precio del producto")
let cantDeseada = prompt("Ingrese la  cantidad de unidades a comprar")

let precioFinal = precioUnitario * cantDeseada

if (cantDeseada != 1){
    alert(`Vas a comprar ${cantDeseada} ${nombreProducto}s`)
}else{
    alert(`Vas a comprar ${cantDeseada} ${nombreProducto}`)
}

if (cantDeseada >=5 ){
    alert(`
        Se aplica el 10% de descuento
        en vez de ${precioFinal}, vas a pagar ${precioFinal - (precioFinal * 0.1) }
    `)
    precioFinal = precioFinal - (precioFinal * 0.1)
} 

alert(`El precio final es de $${precioFinal}`)