let productoSeleccionado = parseInt(
    prompt(
        "Elije cual producto desea comprar: 1.Computadora - 2.Playstation - 3.Xbox - 4.Nintendo"
        )
        )
let seguirComprando = true
let totalCompra = 0
let eleccion
// arreglo de productos
const productosArray = []
// clase producto

class newProduct {
    constructor(id,name,price,stock) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}
const Computadora = new newProduct(1, "Computadora", 1000, 20)
productosArray.push(Computadora)
const Playstation = new newProduct(2, "Playstation", 500, 40)
productosArray.push(Playstation)
const Xbox = new newProduct(3, "Xbox", 450, 30)
productosArray.push(Xbox)
const Nintendo = new newProduct(4, "Nintendo", 600, 10)
productosArray.push(Nintendo)
// Computadora.price = 1000
// console.log(productosArray)

const carrito = []


while (seguirComprando) {
    const producto = productosArray.find(
        (prod) => prod.id === productoSeleccionado
      )

    if(producto){
        carrito.push(producto)
    }

    decision = parseInt(prompt("Desea seguir comprando? 1.Si - 2.No"))
    if (decision === 1) {
        productoSeleccionado = parseInt(
            prompt(
                "Elije cual producto desea comprar: 1.Computadora - 2.Playstation - 3.Xbox - 4.Nintendo"
                )
                )
    } else {
        seguirComprando = false
    }
 }

 carrito.forEach(producto =>{
    totalCompra = totalCompra + producto.price
 })
 console.log(carrito)
 console.log(totalCompra)
 alert(`El total de tu compra ${totalCompra}`)
//  const totalCompraConDescuento = descuento(totalCompra)
//  alert(`El total de tu compra es ${totalCompraConDescuento}`)


 function descuento(valor) {
    let descuento = 0
    if(valor <= 600){
        descuento = 10
    } else if (valor > 800 && valor <= 1200){
        descuento = 15
    } else {
        descuento = 20
    }

    let valorDescuento = valor * (descuento / 100)
    let valorFinal = valor - valorDescuento
    return valorFinal
 }