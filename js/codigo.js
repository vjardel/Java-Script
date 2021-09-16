
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



