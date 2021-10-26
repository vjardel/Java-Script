let posicionSugerido = null;

const productosSugeridos = ["Adidas", "Jordan", "Nasa", "Thrasher"];

const sugeridos = document.getElementById("sugeridos");

const insertarBusquedasSugeridas = () => {
  for (const sugerido of productosSugeridos) {
    let li = document.createElement("li"); 
    li.innerHTML = sugerido;
    sugeridos.append(li) 
  }
} 

const removerBusquedasSugeridas = () => {
  sugeridos.innerHTML = '';
}
const input = document.getElementById("buscador-producto");
input.onfocus = () => insertarBusquedasSugeridas();
input.addEventListener("blur", removerBusquedasSugeridas);



input.onkeydown = (e) => {
  if (e.keyCode == '38') { 
    console.log("Flecha hacia arriba");
    if (posicionSugerido === 0 || posicionSugerido === null) {
      posicionSugerido = productosSugeridos.length - 1;
    }
    else  posicionSugerido --; 
    input.value = productosSugeridos[posicionSugerido];
  }
  else if (e.keyCode == '40') { 
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
