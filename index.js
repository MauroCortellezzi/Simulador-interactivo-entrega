let producto = parseInt(
    prompt(
        "Elije cual producto desea comprar: 1.Computadora - 2.Playstation - 3.Xbox - 4.Nintendo"
        )
        )
let seguirComprando = true
let totalCompra = 0
let eleccion

class newProduct {
    constructor(id,name,price,stock) {
        this.id = id
        this.name = name;
        this.price = price;
        this.stock = stock
    }
}
const Computadora = new newProduct(1, "Computadora", 1000, 20)
const Playstation = new newProduct(2, "Playstation", 500, 40)
const Xbox = new newProduct(3, "Xbox", 450, 30)
const Nintendo = new newProduct(4, "Nintendo", 600, 10)
Computadora.price = 1000


while (seguirComprando) {
    if (producto === Computadora.id) {
        totalCompra = totalCompra + Computadora.price
        Computadora.stock = Computadora.stock-1
    } else if (producto === Playstation.id) {
        totalCompra = totalCompra + Playstation.price
    } else if (producto === Xbox.id) {
        totalCompra = totalCompra + Xbox.price
    } else if (producto === Nintendo.id) {
        totalCompra = totalCompra + Nintendo.price
    }

    decision = parseInt(prompt("Desea seguir comprando? 1.Si - 2.No"))
    if (decision === 1) {
        producto = parseInt(
            prompt(
                "Elije cual producto desea comprar: 1.Computadora - 2.Playstation - 3.Xbox - 4.Nintendo"
                )
                )
    } else {
        seguirComprando = false
    }
 }

 const totalCompraConDescuento = descuento(totalCompra)
 alert(`El total de tu compra es ${totalCompraConDescuento}`)


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