

const canastaLocalStorage = [];


const contenedorCanasta = document.getElementById("canasta");
const totalPagar = document.getElementById("total-pagar");



const eliminarProducto = (producto) => {
  $(`#producto-canasta-${producto.id}`).remove();

  const index = canastaLocalStorage.findIndex(productoLocal => parseInt(producto.id) === parseInt(productoLocal.id));

  canastaLocalStorage.splice(index, 1);
  localStorage.setItem("canasta", JSON.stringify(canastaLocalStorage));
  sumarCanasta();
}




const convertirPrecioANumero = (precio) => parseInt(precio.replaceAll(",", ""));

const numeroAComas = (total) => {
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const sumarCanasta = () => {
  let totalCanasta = 0;
  for (const producto of canastaLocalStorage) {
    totalCanasta = totalCanasta + (producto.precio * producto.cantidad);
  }
  $("#total-pagar").html(`$${numeroAComas(totalCanasta)}`);
  localStorage.setItem("totalAPagar", totalCanasta);
}


$(".boton-canasta").on("click", function () {
  $("#contenedor-general-canasta").toggleClass("on");
});


const insertarProductosACanasta = (producto) => {
  if ($(`#producto-canasta-${producto.id}`).length === 0) {
    if (!$("#contenedor-general-canasta").hasClass("on")) {
      $(".boton-canasta").trigger("click");
    }
    $("#canasta").append(`
        <div class="producto-canasta" id="producto-canasta-${producto.id}">
          <img src="${producto.imagen}">
          <div class="descripcion-producto">
            <p>  Producto: ${producto.nombre}</p>
            <b> $ ${producto.precio}</b>
            <b> Cantidad: <span id="producto-cantidad-${producto.id}">${producto.cantidad}</span></b>
          </div>
        </div>
      `)

    $(`#producto-canasta-${producto.id}`).append(`
        <button class="boton-eliminar" id="boton-${producto.id}">Eliminar</button>
      `);

    $(`#boton-${producto.id}`).on("click", function () {
      eliminarProducto(producto);
    });

    canastaLocalStorage.push(producto);
  } else {
    const nuevaCantidad = parseInt($(`#producto-cantidad-${producto.id}`).html()) + 1;
    const i = canastaLocalStorage.findIndex(p => parseInt(p.id) === parseInt(producto.id))
    canastaLocalStorage[i] = { ...canastaLocalStorage[i], cantidad: nuevaCantidad };
    $(`#producto-cantidad-${producto.id}`).html(nuevaCantidad)
  }
  localStorage.setItem("canasta", JSON.stringify(canastaLocalStorage));
  sumarCanasta();
}