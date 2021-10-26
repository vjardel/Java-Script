let posicionSugerido = null;

const productosSugeridos = ["Adidas", "Jordan", "Nasa", "Thrasher"];

// -------- CONSTANTES ELEMENTOS DEL DOM
const sugeridos = document.getElementById("sugeridos");

const insertarBusquedasSugeridas = () => {
  for (const sugerido of productosSugeridos) {
    let li = document.createElement("li"); // Nueva Etiqueta
    li.innerHTML = sugerido;
    sugeridos.append(li) //Insertar etiqueta en el UL
  }
} 

const removerBusquedasSugeridas = () => {
  sugeridos.innerHTML = '';
}

// CÓDIGO DE INPUT DE MI BUSCADOR
const input = document.getElementById("buscador-producto");

/* Usando los eventos BLUR y FOCUS de un input 
Focus: Cuando estoy parado sobre un input
Blur: Cuando quito el focus sobre un input
*/
input.onfocus = () => insertarBusquedasSugeridas();
input.addEventListener("blur", removerBusquedasSugeridas);



input.onkeydown = (e) => {
  if (e.keyCode == '38') { // 38 corresponde al key code de flecha hacia arriba;
    console.log("Flecha hacia arriba");
    if (posicionSugerido === 0 || posicionSugerido === null) {
      // Cuando llego a 0, o es la primera iteración, quiero que vaya al úlitmo valor de la lista
      posicionSugerido = productosSugeridos.length - 1;
    }
    else  posicionSugerido --; // Resto un valor para que 
    input.value = productosSugeridos[posicionSugerido];
  }
  else if (e.keyCode == '40') { // 40 corresponde al key code de flecha hacia abajo;
    console.log("Flecha hacia abajo");
    if (posicionSugerido === (productosSugeridos.length - 1)) {
      posicionSugerido = 0;
    }
    else if (posicionSugerido === null) posicionSugerido = 0;
    else posicionSugerido ++;
    input.value = productosSugeridos[posicionSugerido];
  }
  console.log(posicionSugerido);
};

const validarFormulario = (form) => {
  form.preventDefault();
  console.log(`Buscar productos por ${form.target.children[0].value}`);   
}

let formularioBuscador = document.getElementById("formulario-buscador");
formularioBuscador.addEventListener("submit", validarFormulario);
