/*const valorProducto = 6200;
const valorDescuentoTalleS = 0.9;
const valorDescuentoTalleL = 0.8;
const iva   = x => x * 0.21;
const multiplicacion = (a,b) => a*b;
const suma = (a,b) => a+b;

const precio = () =>{
    let cantidadBuzosTalleS = parseInt(prompt("Cantidad de buzos talles S (10% de descuento)"));
    let cantidadBuzosTalleM = parseInt(prompt("Cantidad de buzos talles M (No tiene descuento)"));
    let cantidadBuzosTalleL = parseInt(prompt("Cantidad de buzos talles L (20% de descuento)"));
    let totalDeBuzos= suma((cantidadBuzosTalleS,cantidadBuzosTalleM),cantidadBuzosTalleL);
    let valorTalleS =  multiplicacion(multiplicacion(suma(valorProducto, iva(valorProducto)),cantidadBuzosTalleS),valorDescuentoTalleS);
    let valorTalleM =  multiplicacion(suma(valorProducto, iva(valorProducto)),cantidadBuzosTalleM);
    let valorTalleL =  multiplicacion(multiplicacion(suma(valorProducto, iva(valorProducto)),cantidadBuzosTalleL),valorDescuentoTalleL);
    let valorTotal = suma(suma(valorTalleS,valorTalleM),valorTalleL);
    console.log("Precio de buzos talle S "+valorTalleS+ " / Precio de buzos talle M "+valorTalleM+ " / Precio de buzos talle L "+ valorTalleL);
    console.log("Precio Total "+valorTotal);
    alert("El precio total de su compra es de "+valorTotal)
}
precio();
*/

/*class Producto {
    constructor(nombre, talle, precio, cantidad, stock) {
        this.nombre  = nombre.toUpperCase();
        this.talle = talle;
        this.precio  = parseFloat(precio);
        this.vendido = false;
        this.cantidad = cantidad;
        this.stock = stock;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
        this.precio = this.precio * this.cantidad;
    }
    vender() {
        this.vendido = true;
        this.stock = this.stock - this.cantidad;
    }
}

const productos = [];
productos.push(new Producto("Buzo","S", "6200",parseInt(prompt("Cantidad de buzos talle S")), 20 ));
productos.push(new Producto("Buzo","M", "6350",parseInt(prompt("Cantidad de buzos talle M")), 13 ));
for (const producto of productos){
    producto.sumaIva();
}
console.log(productos);*/

//ORDENAR UN ARRAY DE OBJETOS
    const arrayProductos = [
        {id: 1, producto: "Leche", precio: 115},
        {id: 2, producto: "Pan", precio: 73},
        {id: 3, producto: "Pan", precio: 76},
        {id: 4, producto: "Aceite", precio: 236},
        {id: 5, producto: "Medialunas", precio: 130}]
const propiedaAFiltrar = "precio";
arrayProductos.sort((a, b) => {
    if (a[propiedaAFiltrar] > b[propiedaAFiltrar]) {
    return 1;
    }
    if (a[propiedaAFiltrar] < b[propiedaAFiltrar]) {
    return -1;
    }
    return 0;
});
console.log(arrayProductos)



const arrayPersonas = [
    {id: 6, persona: "Juana", edad: 25},
    {id: 7, persona: "Carlos", edad: 20},
    {id: 8, persona: "Valentin", edad: 56},
    {id: 9, persona: "Bruno", edad: 60},
    {id: 10, persona: "Manuela", edad: 17}]
    const propiedaFiltrar = "edad";
    arrayPersonas.sort((a, b) => {
        if (b[propiedaFiltrar] > a[propiedaFiltrar]) {
        return 1;
        }
        if (b[propiedaFiltrar] < a[propiedaFiltrar]) {
        return -1;
        }
        return 0;
    });
    console.log(arrayPersonas)



const arrayDate =[
    {id: 11, persona: "Juana", fecha: "25 de Agosto del 1996"},
    {id: 12, persona: "Carlos", fecha: "20 de Octube del 2001"},
    {id: 13, persona: "Valentin", fecha: "6 de Abril del 1961"},
    {id: 14, persona: "Bruno", fecha: "29 de Junio de 1965"},
    {id: 15, persona: "Manuela", fecha: "19 de Marzo de 2004"}]
console.log(arrayDate.sort((a,b) => b.fecha - a.fecha));
const propiedaFiltrarFecha = "fecha";
arrayDate.sort((a, b) => {
    if (a[propiedaFiltrarFecha] > b[propiedaFiltrarFecha]) {
    return 1;
    }
    if (a[propiedaFiltrarFecha] < b[propiedaFiltrarFecha]) {
    return -1;
    }
    return 0;
});
console.log(arrayDate)


