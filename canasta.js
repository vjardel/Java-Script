// -------- CONSTANTES
const canastaLocalStorage = [];

// -------- CONSTANTES ELEMENTOS DEL DOM
const contenedorCanasta = document.getElementById("canasta");
const totalPagar = document.getElementById("total-pagar");

/* Con esta función puedo eliminar productos de la canasta */
const eliminarProducto = (producto) => {
    for (const productoCanasta of contenedorCanasta.children) {
      if (parseInt(productoCanasta.id) === parseInt(producto.id)) {
        productoCanasta.parentElement.removeChild(productoCanasta);
        
        // El método indexOf me permite obtener el índice de algún item de un Array
        const index = canastaLocalStorage.indexOf(producto);
  
        /* 
          El método splice permite eliminar un elemento de un Array, 
          paso el indice y cuantos elementos quiero eliminar
        */
        canastaLocalStorage.splice(index, 1);
        localStorage.setItem("canasta", JSON.stringify(canastaLocalStorage));
        sumarCanasta();
      }  
    }
  }


// -------- FUNCIONES
/* 
Con esta función puedo agregar productos del contenedor a la canasta 
*/
const convertirPrecioANumero = (precio) => parseInt(precio.replaceAll(",", ""));

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const numeroAComas = (total) => {
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const sumarCanasta = () => {
    let totalCanasta = 0;
    for (const producto of canastaLocalStorage) {
        console.log(producto.precio.replaceAll(",", ""));
        totalCanasta = totalCanasta + convertirPrecioANumero(producto.precio);
    }
    console.log(totalCanasta);
    totalPagar.innerHTML = `$${numeroAComas(totalCanasta)}`
    localStorage.setItem("totalAPagar", totalCanasta);
}

const insertarProductosACanasta = (producto) => {
    let contenedor = document.createElement("div");
    contenedor.className = "producto-canasta";
    contenedor.id = producto.id;
    contenedor.onclick = () => {console.log("Click de producto")};
    contenedor.innerHTML = `<img src="${producto.imagen}">
    <div class="descripcion-producto">
    <p>  Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b>
    </div>`
  
    /* 
      OTRO EJEMPLO DE USO DEL ONCLICK
      Inserto un elemento botón al elemento recientemente creado
      que contenga la función para poder eliminar el prodcuto de la canasta
    */
    let boton = document.createElement("button");
    boton.className = "boton-eliminar";
    boton.innerHTML = "Eliminar";
    boton.onclick = () => eliminarProducto(producto);
    contenedor.appendChild(boton);
  
    contenedorCanasta.appendChild(contenedor);



    canastaLocalStorage.push(producto);
    console.log(canastaLocalStorage);
    localStorage.setItem("canasta", JSON.stringify(canastaLocalStorage));
    sumarCanasta();
  }