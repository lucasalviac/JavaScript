document.addEventListener("DOMContentLoaded", () => {

let confirmacion = confirm("¿Desea comprar un artículo?")
let articulo = ""
let lista_articulos = ""
let total_compra = 0

while(confirmacion){

articulo = solicitarCodigo("Ingrese el código del producto")
let precio = precioProducto(articulo)
let producto = listaProductos(articulo)

confirmacion = confirm("¿Desea comprar otro artículo?")
lista_articulos = lista_articulos + producto
total_compra = total_compra + precio
}

    
document.write ("lista de articulos comprados: <br>" + lista_articulos + "<br>")
document.write ("total de la compra: <br>" + "$" + total_compra)

})

function solicitarCodigo(mensaje){
    let numero = parseInt(prompt(mensaje))
        if (isNaN(numero)){
            alert("Código incorrecto")
            return false
        }
        return numero
    
}

function precioProducto(articulo){
  
 let precio = 0  
switch (articulo){
    case 1:
        precio = 1500000
        
        break
    case 2:
        precio = 1250000
        
        break
    case 3:
        precio = 2000000
        
        break
    case 4:
        precio = 2500000
        
        break
    default:
        precio = 0
        
        break
    
}
return precio
}

function listaProductos(articulo){

let producto = ""

switch (articulo){
    case 1:
        
        producto = "Fender Stratocaster $1500000" + "<br>"
        break
    case 2:
        
        producto = "Fender Telecaster $1250000" + "<br>"
        break
    case 3:
        
        producto = "Gibson SG $2000000" + "<br>"
        break
    case 4:
        
        producto = "Gibson Les Paul $2500000" + "<br>"
        break
    case false:
        
        producto = ""
        break
    default:
        alert("articulo no encontrado")
        break
}
return producto
}