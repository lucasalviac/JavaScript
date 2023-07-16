class Usuario {
    constructor(nombre, apellido, correo, usuario, contraseña) {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.usuario = usuario
        this.contraseña = contraseña
        this.admin = false
    }
}

class Producto {
    constructor(codigo, marca, modelo, precio) {
        this.codigo = codigo
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.vendido = false
    }
    descripcion() {
        return "\n" + this.codigo + "-" + this.marca + "-" + this.modelo + "-" + "$" + this.precio
    }
}

let arregloProductos = new Array()
arregloProductos.push(new Producto("1", "Fender", "Stratocaster", 1500000))
arregloProductos.push(new Producto("2", "Fender", "Telecaster", 1250000))
arregloProductos.push(new Producto("3", "Gibson", "SG", 2000000))
arregloProductos.push(new Producto("4", "Gibson", "Les Paul", 2500000))

let name = prompt("Ingrese su nombre")
while (name == "" || !name) {
    alert("Debe ingresar un dato")
    name = prompt("Ingrese su nombre")
}
let lastname = prompt("Ingrese su apellido")
while (lastname == "" || !lastname) {
    alert("Debe ingresar un dato")
    lastname = prompt("Ingrese su apellido")
}
let email = prompt("Ingrese su email")
while (email == "" || !email) {
    alert("Debe ingresar un dato")
    email = prompt("Ingrese su email")
}
let user = prompt("Ingrese su usuario")
while (user == "" || !user) {
    alert("Debe ingresar un dato")
    user = prompt("Ingrese su usuario")
}
let password = prompt("Ingrese su contraseña")
while (password == "" || !password) {
    alert("Debe ingresar un dato")
    password = prompt("Ingrese su contraseña")
}
let usuario1 = new Usuario(name, lastname, email, user, password)

let ingreso = confirm("¿Desea ingresar a su cuenta?")

let carrito = new Array()
  
    if (ingreso) {
        let ingresarUser = loginUser("Ingrese su usuario")
        let ingresarPass = loginPass("Ingrese su contraseña")

        if (ingresarUser && ingresarPass) {
            document.addEventListener("DOMContentLoaded", () => {
                const hoy = new Date()
                alert("Bienvenido a la tienda de instrumentos\n" + hoy.toLocaleString())
                let confirmacion = confirm("¿Desea comprar un artículo?")
                let articulo = ""
                let lista_articulos = ""
                let lista_articulos2 = ""
                let total_compra = 0

                while (confirmacion) {
                    articulo = solicitarCodigo("Ingrese el código del producto\n" + descripcionProducto())
                    let precio = precioProducto(articulo)
                    let producto = listaProductos(articulo)
                    let producto2 = listaProductos2(articulo)
                    agregarAlCarrito(articulo)

                    confirmacion = confirm("¿Desea comprar otro artículo?")
                    lista_articulos = lista_articulos + producto
                    lista_articulos2 = lista_articulos2 + producto2
                    total_compra = total_compra + precio
                }

                if (lista_articulos != "") {
                    let confirmacionCompra = confirm("¿Confirma la compra?\n" + lista_articulos2 + "\n" + "Total: " + "$" + total_compra)

                    if (confirmacionCompra) {
                        let resumenCompra = carrito.map((element) => element.precio)

                        let total = resumenCompra.reduce((acumulador, elemento) => acumulador + elemento, 0)
                        if (total > 0) {
                            alert("La compra fue realizada con éxito\n" + "Precio final " + "$" + total)
                        }
                    }
                    document.write("Lista de articulos comprados: <br>" + lista_articulos + "<br>")
                    document.write("Total de la compra: <br>" + "$" + total_compra)
                }
            })

            function solicitarCodigo(mensaje) {
                let numero = parseInt(prompt(mensaje))
                if (isNaN(numero)) {
                    alert("Código incorrecto")
                    return false
                }
                return numero

            }

            function precioProducto(articulo) {

                let precio = 0
                switch (articulo) {
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

            function listaProductos(articulo) {

                let producto = ""

                switch (articulo) {
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

            function listaProductos2(articulo) {


                let producto2
                switch (articulo) {
                    case 1:
                        producto2 = "Fender Stratocaster $1500000\n"
                        alert(producto2)

                        break
                    case 2:
                        producto2 = "Fender Telecaster $1250000\n"
                        alert(producto2)

                        break
                    case 3:
                        producto2 = "Gibson SG $2000000\n"
                        alert(producto2)

                        break
                    case 4:
                        producto2 = "Les Paul $2500000\n"
                        alert(producto2)

                        break
                    default:
                        producto2 = ""
                }
                return producto2
            }
        } else {
            alert("Contraseña incorrecta")
        }
    }


function loginUser(mensaje) {
    let usuario = prompt(mensaje)
    if (usuario == user) {
        return true
    }

    return false
}

function loginPass(mensaje) {
    let contraseña = prompt(mensaje)
    if (contraseña == password) {
        return true
    }

    return false
}

function descripcionProducto() {
    let descripcion = ""
    for (let i = 0; i < arregloProductos.length; i++) {
        descripcion += arregloProductos[i].descripcion()
    }
    return descripcion
}

function agregarAlCarrito(articulo) {

    let productoElegido = ""


    switch (articulo) {
        case 1:
            productoElegido = new Producto("1", "Fender", "Stratocaster", 1500000)
            carrito.push(productoElegido)
            console.log(carrito)
            break

        case 2:
            productoElegido = new Producto("2", "Fender", "Teleaster", 1250000)
            carrito.push(productoElegido)
            console.log(carrito)
            break

        case 3:
            productoElegido = new Producto("3", "Gibson", "SG", 2000000)
            carrito.push(productoElegido)
            console.log(carrito)
            break

        case 4:
            productoElegido = new Producto("4", "Gibson", "Les Paul", 2500000)
            carrito.push(productoElegido)
            console.log(carrito)
            break

    }
}