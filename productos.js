const productos = [
  {id: 1,
      nombre: `Buzo Adidas Talle M`,
      imagen: `img/buzo1.png`,
      precio: `7,490`},
    {  id: 2,
        nombre: `Buzo Jordan Talle M`,
        imagen: `img/buzo3.png`,
        precio: `8,699` },
    {  id: 3,
        nombre: `Buzo Jordan Talle M`  ,
        imagen: `img/buzo4.png`,
        precio: `10,999`},
  {  id: 4,
      nombre: `Buzo Tommy Hilfiger Talle M` ,
      imagen: `img/buzo6.png`,
      precio: `16,500`},
  {  id: 5, 
      nombre: `Buzo Hoodie Nba Talle S`  ,
      imagen: `img/buzo7.png`,
      precio: `6,200`},
  {  id: 6,
      nombre: `Buzo Rosa Minimalista Talle S`  ,
      imagen: `img/buzo8.png`,
      precio: `3,500`},
  {  id: 7,
      nombre: `Buzo Nasa Talle S`  ,
      imagen: `img/buzo9.png`,
      precio: `3,200`},
  {  id: 8,
      nombre: `Buzo Thrasher Talle S`  ,
      imagen: `img/buzo10.png`,
      precio: `3,000`},];

// -------- CONSTANTES ELEMENTOS DEL DOM
const listadoProductos = document.getElementById("listado");
const prodocutoLocalStorage = JSON.parse(localStorage.getItem("canasta"));

// -------- FUNCIONES 
/* 
  EJEMPLO DE USO DEL ONCLICK
  Función para crear productos dinámicamente y crearlos en el contenedor 
*/
const insertarProductos = () => {
  for (const producto of productos) {
    let contenidoProducto = document.createElement("li");
    contenidoProducto.className = "producto";
    contenidoProducto.id = producto.id;
    contenidoProducto.innerHTML = `
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="">
      </div>
      <p class="nombre">${producto.nombre}</p>
      <p class="precio">$${producto.precio}</p>`;

    // Puedo definir un evento on click a un elemento que estoy creando dinámicamente
    contenidoProducto.onclick = () => insertarProductosACanasta(producto);
    // contenidoProducto.addEventListener("click", () => {insertarProductosACanasta(producto)});
    listadoProductos.appendChild(contenidoProducto);
  }
}

//CÓDIGO
insertarProductos();


// Recorrer los productos del LocalStorage para insertarlos en la canasta
if (prodocutoLocalStorage !== null) {
  for (const producto of prodocutoLocalStorage) {
    insertarProductosACanasta(producto);
  }
}