  // -------- CONSTANTES NEGOCIO
  const productos = [
    {
      id: 1,
      nombre: `Buzo Adidas Talle M`,
      imagen: `img/buzo1.png`,
      precioLabel: `7,490`,
      precio: 7490,
      cantidad: 1},
    {  id: 2,
        nombre: `Buzo Jordan Talle M`,
        imagen: `img/buzo3.png`,
        precioLabel: `8,699`,
        precio: 8699, 
        cantidad: 1 },
    {  id: 3,
        nombre: `Buzo Jordan Talle M`  ,
        imagen: `img/buzo4.png`,
        precioLabel: `10,999`,
        precio: 10999,
        cantidad: 1},
  {  id: 4,
      nombre: `Buzo Tommy Hilfiger Talle M` ,
      imagen: `img/buzo6.png`,
      precioLabel: `16,500`,
      precio: 16500,
      cantidad: 1},
  {  id: 5, 
      nombre: `Buzo Hoodie Nba Talle S`  ,
      imagen: `img/buzo7.png`,
      precioLabel: `6,200`,
      precio: 6200,
      cantidad: 1},
  {  id: 6,
      nombre: `Buzo Rosa Minimalista Talle S`  ,
      imagen: `img/buzo8.png`,
      precioLabel: `3,500`,
      precio: 3500,
      cantidad: 1},
  {  id: 7,
      nombre: `Buzo Nasa Talle S`  ,
      imagen: `img/buzo9.png`,
      precioLabel: `3,200`,
      precio: 3200,
      cantidad: 1},
  {  id: 8,
      nombre: `Buzo Thrasher Talle S`  ,
      imagen: `img/buzo10.png`,
      precioLabel: `3,000`,
      precio: 3000,
      cantidad: 1
    }];
    
jQuery(() => {

  const prodocutoLocalStorage = JSON.parse(localStorage.getItem("canasta"));

 
  const insertarProductos = () => {
    for (const producto of productos) {
      $('#listado').append(`
    <li class="producto" id="${producto.id}">
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="">
      </div>
      <p class="nombre">${producto.nombre}</p>
      <p class="precio">$${producto.precioLabel}</p>
    </li>`);

      $(`#${producto.id}`).on("click", function () {
        insertarProductosACanasta(producto);
      });
    }
  }

  insertarProductos();


  if (prodocutoLocalStorage !== null) {
    for (const producto of prodocutoLocalStorage) {
      insertarProductosACanasta(producto);
    }
  }

});