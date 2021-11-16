jQuery(() => {
    const totalAPagar = JSON.parse(localStorage.getItem("totalAPagar"));
    const prodocutoLocalStorage = JSON.parse(localStorage.getItem("canasta"));

    const pagar = document.getElementById("pagar");
    const subtotal = document.getElementById("subtotal");
    const iva = document.getElementById("iva");
    const envio = document.getElementById("envio");

    class Factura {
        constructor(subtotal, cantidadProductos) {
            this.subtotal = subtotal;
            this.iva = subtotal * 0.21;
            this.envio = cantidadProductos * 850;
        }
        total() {
            return this.subtotal + this.iva + this.envio;
        }
    }

    const facturaUsuario = new Factura(totalAPagar, prodocutoLocalStorage.length);

    subtotal.innerHTML = `Subtotal: <strong>$${numeroAComas(facturaUsuario.subtotal)}</strong>`;
    iva.innerHTML = `iva: <strong>$${numeroAComas(facturaUsuario.iva)}</strong>`;
    envio.innerHTML = `Envío: <strong>$${numeroAComas(facturaUsuario.envio)}</strong>`;
    pagar.innerHTML = "$" + numeroAComas(facturaUsuario.total());
});