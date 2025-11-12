// ----- FUNCIONALIDAD DEL SELECTOR DE COLOR (Solo en Catálogo) -----
const colorCircles = document.querySelectorAll('.color-circle');

colorCircles.forEach(circle => {
    circle.addEventListener('click', function () {
        // Obtener la nueva URL de la imagen desde el atributo data-image
        const newImageSrc = circle.getAttribute('data-image');

        // Obtener el ID de la imagen del producto a cambiar
        const productImgId = circle.getAttribute('data-product');

        // Encontrar la imagen correspondiente
        const productImage = document.getElementById(productImgId);

        if (productImage) {
            // Cambiar la fuente (src) de la imagen
            productImage.src = newImageSrc;
        }
    });
});


function chequearDiv() {
    const productos = document.querySelectorAll('.product-card'); // todos los productos
    const inputMax = document.getElementById('max-price');
    const precio_maximo = parseFloat(inputMax.value); // lo que puso el usuario

    const contenedor = document.getElementById('resultado');

    // Borrar cualquier mensaje previo
    contenedor.innerHTML = '';

    let hayVisible = false; // bandera para saber si hay algún producto que cumpla

    productos.forEach(producto => {
        const precioTexto = producto.querySelector('.product-price').textContent; // "$12500"
        const precio = parseFloat(precioTexto.replace('$', '').replace(',', '')); // número

        if (precio > precio_maximo) {
            producto.style.display = 'none';
        } else {
            producto.style.display = 'block';
            hayVisible = true; // hay al menos un producto que cumple
        }
    });

    // Si no hay productos visibles, mostrar mensaje
    if (!hayVisible) {
        const p = document.createElement('p');
        p.textContent = "No hay objetos que cumplan con sus requerimientos";
        contenedor.appendChild(p);
    }
}

// Evitar que el botón "Agregar al Carrito" recargue la página



document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll('.btn[data-key="catalog-add"]');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0;

    botones.forEach(boton => {
        boton.addEventListener('click', function (event) {
            event.preventDefault();

            const productoCard = boton.parentElement;
            const nombre = productoCard.querySelector('h3').textContent;
            const precioTexto = productoCard.querySelector('.product-price').textContent;
            const precio = parseFloat(precioTexto.replace('$', '').replace(',', ''));

            // Crear <li> con nombre + precio

            const item = document.createElement('li');
            const info = document.createElement('div');
            info.classList.add('item-info');
            info.innerHTML = `<span class="item-nombre">${nombre}</span><span class="item-precio">$${precio}</span>`;
            item.appendChild(info);

            // Botón eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = "-";
            btnEliminar.classList.add('eliminar-btn');

            btnEliminar.addEventListener('click', function () {
                item.remove();
                total -= precio;
                actualizarTotal();
            });

            item.appendChild(btnEliminar);
            listaCarrito.appendChild(item);

            total += precio;
            actualizarTotal();
        });
    });

    function actualizarTotal() {
        totalCarrito.textContent = `Total: $${total}`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const comprarBtn = document.getElementById("comprar-btn");
    const formulario = document.getElementById("formulario-compra");
    const cancelarBtn = document.getElementById("cancelar-compra");
    const confirmarBtn = document.getElementById("confirmar-compra");

    // Mostrar formulario
    comprarBtn.addEventListener("click", () => {
        formulario.style.display = "flex";
    });

    // Cancelar compra
    cancelarBtn.addEventListener("click", () => {
        formulario.style.display = "none";
    });

    // Confirmar compra
    confirmarBtn.addEventListener("click", () => {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const tarjeta = document.getElementById("tarjeta").value.trim();


        if (!nombre || !apellido || !email || !tarjeta) {
            alert("Por favor, completá todos los campos.");
            return;
        }

        // Detectar idioma seleccionado
        const idioma = document.getElementById("language").value;

        if (idioma === "en") {
            alert(`Thank you for your purchase, ${nombre} ${apellido}!`);
        } else {
            alert(`¡Gracias por tu compra, ${nombre} ${apellido}!`);
        }


    });
});
