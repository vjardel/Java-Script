const valorProducto = 6200;
const valorDescuentoTalleS = 0.9;
const valorDescuentoTalleL = 0.8;
const iva   = x => x * 0.21;
const multiplicacion = (a,b) => a*b;
const suma = (a,b) => a+b;

const precio = () =>{
    let cantidadBuzosTalleS = parseInt(prompt("Cantidad de buzos talles S (10% de descuento)"));
    let cantidadBuzosTalleM = parseInt(prompt("Cantidad de buzos talles M (No tiene descuento)"));
    let cantidadBuzosTalleL = parseInt(prompt("Cantidad de buzos talles L (20% de descuento)"));
    let valorTalleS =  multiplicacion(multiplicacion(suma(valorProducto, iva(valorProducto)),cantidadBuzosTalleS),valorDescuentoTalleS);
    let valorTalleM =  multiplicacion(suma(valorProducto, iva(valorProducto)),cantidadBuzosTalleM);
    let valorTalleL =  multiplicacion(multiplicacion(suma(valorProducto, iva(valorProducto)),cantidadBuzosTalleL),valorDescuentoTalleL);
    let valorTotal = suma(suma(valorTalleS,valorTalleM),valorTalleL);
    console.log("Precio de buzos talle S "+valorTalleS+ " / Precio de buzos talle M "+valorTalleM+ " / Precio de buzos talle L "+ valorTalleL);
    console.log("Precio Total "+valorTotal);
    alert("El precio total de su compra es de "+valorTotal)
}
precio();