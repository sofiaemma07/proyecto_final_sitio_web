/*
    script.js - Funcionalidad básica del sitio TermoHG
    - Manejador del carrusel de la página de inicio.
    - Manejador del selector de color en la página de catálogo.
    - Manejador del selector de idioma en todas las páginas.
*/

// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // ----- FUNCIONALIDAD DEL CARRUSEL (Solo en Home) -----
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


    // ----- FUNCIONALIDAD DEL SELECTOR DE COLOR (Solo en Catálogo) -----
    const colorCircles = document.querySelectorAll('.color-circle');

    colorCircles.forEach(circle => {
        circle.addEventListener('click', function() {
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

    // ----- FUNCIONALIDAD DEL SELECTOR DE IDIOMA -----
    // 1. El diccionario de traducciones
    const translations = {
        // Español
        es: {
            'nav-home': 'Inicio',
            'nav-about': 'Quiénes Somos',
            'nav-catalog': 'Catálogo',
            'nav-contact': 'Contacto',
            'slide1-title': 'Modelo Classic',
            'slide1-desc': 'Tu compañero ideal para cada aventura. Mantiene tu bebida a la temperatura perfecta durante horas.',
            'slide1-btn': 'Descubrí la Colección',
            'slide2-title': 'Estilo Minimalista',
            'slide2-desc': 'Diseño elegante que se adapta a tu vida. Calidad y confort en cada detalle.',
            'slide2-btn': 'Ver Más',
            'welcome-title': 'Bienvenido a Aluna',
            'welcome-text': 'Descubre la fusión perfecta de diseño y funcionalidad. Nuestros termos están pensados para acompañarte en tu día a día, conservando tus bebidas con estilo.',
            'footer-nav': 'Navegación',
            'footer-products': 'Productos',
            'footer-contact': 'Contacto',
            'footer-copy': '© 2025 ThermoHG. Todos los derechos reservados.'
        },
        // Inglés
        en: {
            'nav-home': 'Home',
            'nav-about': 'About Us',
            'nav-catalog': 'Catalog',
            'nav-contact': 'Contact',
            'slide1-title': 'Classic Model',
            'slide1-desc': 'Your ideal partner for every adventure. Keeps your drink at the perfect temperature for hours.',
            'slide1-btn': 'Discover the Collection',
            'slide2-title': 'Minimalist Style',
            'slide2-desc': 'Elegant design that adapts to your life. Quality and comfort in every detail.',
            'slide2-btn': 'See More',
            'welcome-title': 'Welcome to Aluna',
            'welcome-text': 'Discover the perfect fusion of design and functionality. Our thermoses are designed to accompany you in your day-to-day, preserving your drinks with style.',
            'footer-nav': 'Navigation',
            'footer-products': 'Products',
            'footer-contact': 'Contact',
            'footer-copy': '© 2025 ThermoHG. All rights reserved.'
        }
    };

    // 2. Referencia al selector de idioma
    const langSelector = document.getElementById('language');

    // 3. Función para cambiar el idioma
    function changeLanguage() {
        // Obtiene el valor seleccionado (ej: "en" o "es")
        const lang = langSelector.value;

        // Selecciona TODOS los elementos que tengan el atributo "data-key"
        const elementsToTranslate = document.querySelectorAll('[data-key]');

        // Recorre cada elemento
        elementsToTranslate.forEach(element => {
            // Obtiene la clave (ej: "nav-home")
            const key = element.dataset.key;
            
            // Busca la traducción en el diccionario
            const translation = translations[lang][key];

            // Si existe la traducción, la aplica
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // También cambia el atributo 'lang' de la etiqueta <html>
        document.documentElement.lang = lang;
    }

    // 4. "Oyente" que ejecuta la función cuando el usuario cambia la opción
    langSelector.addEventListener('change', changeLanguage);

});