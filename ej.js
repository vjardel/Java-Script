/*let cantidadPersonas = parseInt(prompt("¿Cuantas Personas van a ir a la fiesta?"));

if (cantidadPersonas <=5) {alert (`Me parece que ${cantidadPersonas} personas son muy pocas para hacer una fiesta`);}
else if (cantidadPersonas <=20) {alert (`Me parece que con ${cantidadPersonas} personas podria ser una mini fiesta`);}
else if (cantidadPersonas <=60){alert (`Me parece que con ${cantidadPersonas} personas podria se una buena fiesta`);}
else if (cantidadPersonas <=100){alert (`Me parece que con ${cantidadPersonas} personas va a ser una gran fiesta`);}
else if(cantidadPersonas <=500) {alert  (`Espero que tengas una gran casa porque con ${cantidadPersonas} personas te va a explotar`);}
for (let i = 1; i <= 10 ; i++) {alert (i);}
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);}

for (let i = 1; i <= 3; i++) {
    let ingresarNombre = prompt("Ingresar nombre");
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);}


let nombreIngresado = prompt("Nombre");
const MAXIMO_INTENTOS = 3 ;
while (nombreIngresado !== ""){
    if (nombreIngresado === ""){
        alert("ERROR!");}
    else if (nombreIngresado === "ANA"){
    } else if (nombreIngresado === "EMA" || nombreIngresado === "ema"){
        alert ("Hola Ema");
    }else{
        alert("Hola");
        break;}}

//let numeroNotas = parseInt(prompt("Numero de notas a ingresar"));
//let sumaTotal = 0;
//let promedio;
//for (let i=1; i <= numeroNotas; i++){
//    let nota = parseInt(prompt("Ingrese Nota"));
//    sumaTotal = sumaTotal + nota;
//    console.log(sumaTotal);}
//promedio = sumaTotal / numeroNotas;
//alert(promedio);

const CANTIDAD_NUMEROS = 1;
for(let i = 1; i <= CANTIDAD_NUMEROS; i++) {
    let numero = parseInt(prompt("Ingrese el numero"));
    switch (numero){
        case 0:
            alert("Muy Malo");
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            alert("Aceptable");
            break;
        case 8:
        case 9:
            alert("Bueno");
            break;
        case 10:
            alert("Exelente");
            break;
        default:
            alert("No has ingresado un valor valido");
            break;
    }
}

const CANTIDAD_NUMEROS = 1;
for(let i = 1; i <= CANTIDAD_NUMEROS; i++) {
    let numero = parseInt(prompt("Ingrese el numero"));
    switch (true){
        case numero === 0:
            alert("Muy Malo");
            break;
        case numero >= 1 && numero <= 40:
            alert("Malo");
            break;
        case numero >= 50 && numero <= 70:
            alert("Aceptable");
            break;
        case numero >= 80 && numero <= 90:
            alert("Bueno");
            break;
        case numero === 100:
            alert("Exelente");
            break;
        default:
            alert("No has ingresado un valor valido");
            break;
    }
}

let entrada = prompt("Ingresar un nombre");
while(entrada != "ESC"){
   switch (entrada) {
       case "Brian":
            alert("Bienvenido Brian");
            break;
        case "Valentin":
            alert("Hola Valentín, bienvenido a tu página");
            break;
       default:
           alert("No eres bienvenido a esta página")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}


for (let i = 1; i <= 2; i++) {
    let ingresarNombre = prompt("Ingresar nombre");
    let ingresarApellido = prompt("Ingresar apellido")
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre+ " " + ingresarApellido);
    console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre + " / Apellido: "+ingresarApellido )
}


*/


/*let resultado = 0;
let primerNumero;
let segundoNumero;


function saludar() {
    console.log("¡Hola estudiantes!");
}
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}
function mostrar(mensaje) {
    console.log(mensaje);
}
function socilitarInformacion(){
    let primerNumero = parseInt(prompt("Numero 1"));
    let segundoNumero = parseInt(prompt("Segundo 2"));
    let operador = prompt("Tipo de operador");
    let respuesta = calculadora(primerNumero, segundoNumero, operador);
    mostrar(respuesta);
}



saludar();
socilitarInformacion(); 




const suma  = (a,b) => { return a + b};
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;
const calcularPrecio = () => {
    let precioProducto = parseInt(prompt("Precio Producto"));
    let precioDescuento = parseInt(prompt("Precio Descuento"));
    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
    console.log(nuevoPrecio);
}
calcularPrecio()


Ejercicio: Agencia vuelos:
    * Se dará un valor determinado de tiquete
    * Los niños tienen un 10% de descuento
    Pedir mediante un prompt número de adultos
    Pedir mediante un prompt número de niños
    En base a esos 2 datos, imprimir en consola o con un alert el valor total por los tiquetes

const valorTiquete = 500;
const valorDescuentoNinos = 0.9;
const multiplicacion = (a,b) => a*b;
const suma = (a,b) => a+b;

const calcularPrecio = () => {
    let cantindadAdultos = parseInt(prompt("Cantindad de Adultos"));
    let cantidadNinios = parseInt(prompt("Cantidad de Niños"));
    let valorAdulto = multiplicacion(valorTiquete, cantindadAdultos);
    let valorNinio = multiplicacion(multiplicacion(valorTiquete,cantindadAdultos),valorDescuentoNinos);
    let valorFinal = suma(valorNinio,valorAdulto);
    console.log("Precio de Adultos " +valorAdulto + " / Precio Niños " + valorNinio);
    console.log(valorFinal)
}
calcularPrecio();
*/