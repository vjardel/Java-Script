const canastaLocalStorage = [];
const contenedorCanasta = document.getElementById("canasta");
const totalPagar = document.getElementById("total-pagar");

const eliminarProducto = (producto) => {
    for (const productoCanasta of contenedorCanasta.children) {
      if (parseInt(productoCanasta.id) === parseInt(producto.id)) {
        productoCanasta.parentElement.removeChild(productoCanasta);
        const index = canastaLocalStorage.indexOf(producto);
        canastaLocalStorage.splice(index, 1);
        localStorage.setItem("canasta", JSON.stringify(canastaLocalStorage));
        sumarCanasta();
      }  
    }
  }


const convertirPrecioANumero = (precio) => parseInt(precio.replaceAll(",", ""));
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