let cantidadPersonas = parseInt(prompt("¿Cuantas Personas van a ir a la fiesta?"));

if (cantidadPersonas <=5) {
    alert (`Me parece que ${cantidadPersonas} personas son muy pocas para hacer una fiesta`);
}
else if (cantidadPersonas <=20) {
    alert (`Me parece que con ${cantidadPersonas} personas podria ser una mini fiesta`);
}
else if (cantidadPersonas <=60){
    alert (`Me parece que con ${cantidadPersonas} personas podria se una buena fiesta`);
}
else if (cantidadPersonas <=100){
    alert (`Me parece que con ${cantidadPersonas} personas va a ser una gran fiesta`);
}
else if(cantidadPersonas <=500) {
    alert  (`Espero que tengas una gran casa porque con ${cantidadPersonas} personas te va a explotar`);
}