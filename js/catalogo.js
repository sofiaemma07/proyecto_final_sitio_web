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
