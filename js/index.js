    // ----- FUNCIONALIDAD DEL CARRUSEL -----
    const slides = document.querySelectorAll('.slide');

    // Solo ejecuta el carrusel si existen slides en la página
    if (slides.length > 0) {
        let currentSlide = 0;

        // Función para mostrar un slide específico
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        // Función para pasar al siguiente slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Mostrar el primer slide al cargar
        showSlide(0);

        // Cambiar de slide cada 5 segundos (5000 milisegundos)
        setInterval(nextSlide, 5000);
    }
