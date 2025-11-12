/*
    script.js - Funcionalidad básica del sitio TermoHG
    - Manejador del carrusel de la página de inicio.
    - Manejador del selector de color en la página de catálogo.
    - Manejador del selector de idioma en todas las páginas.
    - Manejador del formulario de contacto en la página de contacto.
*/



// Espera a que todo el contenido del DOM esté cargado

document.addEventListener('DOMContentLoaded', function () {


    // ----- FUNCIONALIDAD DEL HEADER ----- //
    let lastScrollTop = 0;
    const header = document.querySelector(".site-header");

    
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolleando hacia abajo → ocultar
            header.classList.add("hide");
        } else {
            // Scrolleando hacia arriba → mostrar
            header.classList.remove("hide");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // evita valores negativos
    });

    // Selecciona el botón de hamburguesa y el menú
    const navToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');

    // Verifica que ambos elementos existan
    if (navToggle && navMenu) {
        // Añade un 'escuchador de eventos' para el clic en el botón
        navToggle.addEventListener('click', () => {
            // Alterna (añade o quita) la clase 'active' en el menú
            navMenu.classList.toggle('active');

            // Alterna (añade o quita) la clase 'active' en el botón (para la animación de la 'X')
            navToggle.classList.toggle('active');
        });
    }

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

    // ----- FUNCIONALIDAD DEL SELECTOR DE IDIOMA -----
    // 1. El diccionario de traducciones
    const translations = {
        // Español (sin dicc. español, no se puede volver a traducir la pagina del en a es)
        es: {
            'nav-home': 'Inicio',
            'nav-about': 'Quiénes Somos',
            'nav-catalog': 'Catálogo',
            'nav-contact': 'Contacto',
            'slide1-title': 'Modelo Clásico',
            'slide1-desc': 'Tu compañero ideal para cada aventura. Mantiene tu bebida a la temperatura perfecta durante horas.',
            'slide1-btn': 'Descubrí la Colección',
            'slide2-title': 'Estilo Minimalista',
            'slide2-desc': 'Diseño elegante que se adapta a tu vida. Calidad y confort en cada detalle.',
            'slide2-btn': 'Ver Más',
            'welcome-title': 'Bienvenido a Aluna',
            'welcome-text': 'Descubrí la fusión perfecta entre diseño y funcionalidad. Nuestros termos están hechos para acompañarte cada día, conservando tus bebidas con estilo.',
            'footer-products': 'Productos',
            'footer-cert': 'Seguridad y certificaciones',
            'footer-copy': '© 2025 ThermoHG. Todos los derechos reservados.',
            'catalog-title': 'Nuestro Catálogo',
            'catalog-prod1-desc': 'Perfecto para largas jornadas. Acero inoxidable de doble capa.',
            'catalog-prod2-desc': 'Compacto y ligero, ideal para la ciudad.',
            'catalog-warranty': 'Garantía: Únicamente si el termo llegó en malas condiciones.',
            'catalog-add': 'Agregar al Carrito',
            'contact-title': 'Contacto',
            'contact-text': '¿Tenés alguna duda o consulta? Escribinos.',
            'contact-name-label': 'Nombre',
            'contact-email-label': 'Correo Electrónico',
            'contact-message-label': 'Mensaje',
            'contact-send': 'Enviar Mensaje',
            'contact-other': 'Otras vías de comunicación',
            'contact-follow': 'Seguinos',
            'about-title': 'Quiénes Somos - Aluna',
            'about-heading': 'Quiénes Somos',
            'about-text': 'En Aluna creemos que cada momento cuenta. Nuestro termo portátil con capacidad de auto-calentado es el reflejo de esa visión: una manera inteligente de mantener tus bebidas calientes en cualquier momento y lugar, sin depender de microondas ni cocinas. Con batería recargable por USB-C, controles de temperatura y una aplicación móvil complementaria, combinamos tecnología, diseño y funcionalidad para hacer tu día más simple y eficiente.',
            'about-mission-title': 'Nuestra Misión',
            'about-mission-text': 'Desarrollar productos de hidratación innovadores que promuevan un estilo de vida saludable y sustentable, garantizando calidad, diseño y durabilidad en cada creación.',
            'about-vision-title': 'Nuestra Visión',
            'about-vision-text': 'Convertirnos en una marca referente en soluciones de hidratación ecológicas, reconocida por su responsabilidad ambiental, su innovación constante y su conexión con las personas.',
            'about-values-title': 'Nuestros Valores',
            'about-value-quality': 'Calidad',
            'about-value-design': 'Diseño',
            'about-value-sustainability': 'Sostenibilidad',
            'about-value-innovation': 'Innovación',
            'about-value-commitment': 'Compromiso',
            'footer-nav': 'Navegación',
            'footer-products': 'Productos',
            'footer-media': 'Redes Sociales',
            'footer-payments': 'Medios de Pago',
            'footer-contact': 'Contactanos',
            'footer-cert': 'Seguridad y Certificaciones',
            'footer-copy': '© 2025 ThermoHG. Todos los derechos reservados.',


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
            'footer-media': 'Social media',
            'footer-payments': 'Payment methods',
            'footer-contact': 'Contact us',
            'footer-cert': 'Security and certifications',
            'footer-copy': '© 2025 ThermoHG. All rights reserved.',
            'catalog-title': 'Our Catalog',
            'catalog-prod1-desc': 'Perfect for long days. Double-layer stainless steel.',
            'catalog-prod2-desc': 'Compact and lightweight, ideal for the city.',
            'catalog-warranty': 'Warranty: Only if the thermos arrived in bad condition.',
            'catalog-add': 'Add to Cart',
            'contact-title': 'Contact',
            'contact-text': 'Do you have any questions or inquiries? Write to us.',
            'contact-name-label': 'Name',
            'contact-email-label': 'Email',
            'contact-message-label': 'Message',
            'contact-send': 'Send Message',
            'contact-other': 'Other ways to contact us',
            'contact-follow': 'Follow us',
            'about-title': 'About Us - Aluna',
            'about-heading': 'About Us',
            'about-text': 'At Aluna, we believe every moment counts. Our self-heating portable thermos reflects that vision: a smart way to keep your drinks hot anytime, anywhere, without relying on microwaves or stoves. With a rechargeable USB-C battery, temperature controls, and a companion mobile app, we combine technology, design, and functionality to make your day simpler and more efficient.',
            'about-mission-title': 'Our Mission',
            'about-mission-text': 'To develop innovative hydration products that promote a healthy and sustainable lifestyle, ensuring quality, design, and durability in every creation.',
            'about-vision-title': 'Our Vision',
            'about-vision-text': 'To become a leading brand in eco-friendly hydration solutions, recognized for environmental responsibility, continuous innovation, and genuine connection with people.',
            'about-values-title': 'Our Values',
            'about-value-quality': 'Quality',
            'about-value-design': 'Design',
            'about-value-sustainability': 'Sustainability',
            'about-value-innovation': 'Innovation',
            'about-value-commitment': 'Commitment'
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

    // ----- FUNCIONALIDAD DEL FORMULARIO DE CONTACTO ----- //

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const contacto = {
            nombre: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mensaje: document.getElementById("message").value
        };

        // Guardar en LocalStorage
        let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
        contactos.push(contacto);
        localStorage.setItem("contactos", JSON.stringify(contactos));

        const lang = document.getElementById('language').value;
        if (lang === 'en') {
            alert("Your message has been sent successfully.");
        } else {
            alert("El mensaje se ha enviado con éxito.");
        }

    });
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const contacto = {
                nombre: document.getElementById("name").value,
                email: document.getElementById("email").value,
                mensaje: document.getElementById("message").value
            };

            let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
            contactos.push(contacto);
            localStorage.setItem("contactos", JSON.stringify(contactos));

            const lang = document.getElementById('language').value;
            if (lang === 'en') {
                alert("Your message has been sent successfully.");
            } else {
                alert("El mensaje se ha enviado con éxito.");
            }
        });
    }




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

});


/* NOTAS Y ACLARACIONES
 * Utilizamos un diccionario local para la traduccion
 * por una cuestion de VELOCIDAD, COSTO (las API
 * tienen un costo por uso) y para lograr mejor
 * CONSISTENCIA con lo que se quiere transmitir 
 * en español para pasarlo a ingles. 
*/