const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevocomic = document.createElement("div");
    nuevocomic.classList = "tarjeta-producto"
    nuevocomic.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <h5 class="descripcion">${producto.descripcion}</h5>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevocomic);
    nuevocomic.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(comics);