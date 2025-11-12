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

    const menu = document.getElementById("main-nav");
    const langSwitcher = document.querySelector(".lang-switcher");

    function moveLangSwitcher() {
        if (window.innerWidth <= 768) {
            // mover dentro del menú
            if (!menu.contains(langSwitcher)) {
                menu.appendChild(langSwitcher);
            }
        } else {
            // mover afuera (al final del contenedor principal)
            const container = document.querySelector(".nav-container");
            if (!container.contains(langSwitcher)) {
                container.appendChild(langSwitcher);
            }
        }
    }

    window.addEventListener("resize", moveLangSwitcher);
    window.addEventListener("DOMContentLoaded", moveLangSwitcher);

    // Selecciona el botón de hamburguesa y el menú
    const navToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');

    // Verifica que ambos elementos existan
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

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
            'footer-products': 'productos',
            'footer-cert': 'Seguridad y certificaciones',
            'footer-copy': '© 2025 ThermoHG. Todos los derechos reservados.',
            'catalog-title': 'Nuestro Catálogo',
            'catalog-prod1-desc': 'Diseño resistente, ideal para largas jornadas.',
            'catalog-prod2-desc': 'Pensado para quienes están siempre en movimiento.',
            'catalog-prod3-desc' : 'Versión urbana con correa ajustable y cuerpo liviano.',
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
            'footer-products': 'productos',
            'footer-media': 'Redes Sociales',
            'footer-payments': 'Medios de Pago',
            'footer-contact': 'Contactanos',
            'footer-cert': 'Seguridad y Certificaciones',
            'footer-copy': '© 2025 ThermoHG. Todos los derechos reservados.',
            "price-filter-btn": "Filtrar",
            "prod1-extra-desc": 'Doble capa de acero inoxidable que mantiene la temperatura por horas.',
            "prod1-feat1": '• Capacidad: 1 litro',
            "prod1-feat2": '• Indicador digital de temperatura',
            "prod1-feat3": '• Apto para bebidas frías y calientes',
            "prod2-extra-desc": 'Incluye un sorbete retráctil de acero inoxidable y tapa hermética a prueba de fugas.',
            "prod2-feat1": '• Capacidad: 750 ml',
            "prod2-feat2": '• Indicador digital de temperatura',
            "prod2-feat3": '• Ideal para deportistas o viajes',
            "prod3-extra-desc": 'Llévalo a donde vayas. Perfecta para caminatas o trabajo al aire libre.',
            "prod3-feat1": '• Capacidad: 750 ml',
            "prod3-feat2": '• Indicador digital de temperatura',
            "prod3-feat3": '• Material antideslizante',
            "cart-title": "Carrito",
            "cart-total": "Total:",
            "cart-buy": "Comprar",
            "buy-title": "Finalizar Compra",
            "buy-name": "Nombre:",
            "buy-lastname": "Apellido:",
            "buy-email": "Correo electrónico:",
            "buy-card": "Número de tarjeta:",
            "buy-submit": "Confirmar Compra",
            "buy-cancel": "Cancelar",
            "buy-success": "¡Compra realizada con éxito!"
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
            'footer-products': 'products',
            'footer-media': 'Social media',
            'footer-payments': 'Payment methods',
            'footer-contact': 'Contact us',
            'footer-cert': 'Security and certifications',
            'footer-copy': '© 2025 ThermoHG. All rights reserved.',
            'catalog-title': 'Our Catalog',
            'catalog-prod1-desc': 'Perfect for long days. Double-layer stainless steel.',
            'catalog-prod2-desc': 'Compact and lightweight, ideal for the city.',
            'catalog-prod3-desc' : 'Urban version with adjustable strap and lightweight body.',
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
            'about-value-commitment': 'Commitment',
            "price-filter-btn": "Filter",
            "prod1-extra-desc": 'Double-layer stainless steel that maintains temperature for hours.',
            "prod1-feat1": '• Capacity: 1 liter',
            "prod1-feat2": '• Digital temperature indicator',
            "prod1-feat3": '• Suitable for hot and cold drinks',
            "prod2-extra-desc": 'Includes a retractable stainless steel straw and a leak-proof hermetic lid.',
            "prod2-feat1": '• Capacity: 750 ml',
            "prod2-feat2": '• Digital temperature indicator',
            "prod2-feat3": '• Ideal for athletes or travel',
            "prod3-extra-desc": 'Take it wherever you go. Perfect for hikes or outdoor work.',
            "prod3-feat1": '• Capacity: 750 ml',
            "prod3-feat2": '•Digital temperature indicator',
            "prod3-feat3": '• Non-slip material',
            "cart-title": "Cart",
            "cart-total": "Total:",
            "cart-buy": "Buy",
            "buy-title": "Checkout",
            "buy-name": "First Name:",
            "buy-lastname": "Last Name:",
            "buy-email": "Email:",
            "buy-card": "Card Number:",
            "buy-submit": "Confirm Purchase",
            "buy-cancel": "Cancel",
            "buy-success": "Purchase completed successfully!"
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

/* NOTAS Y ACLARACIONES
 * Utilizamos un diccionario local para la traduccion
 * por una cuestion de VELOCIDAD, COSTO (las API
 * tienen un costo por uso) y para lograr mejor
 * CONSISTENCIA con lo que se quiere transmitir 
 * en español para pasarlo a ingles. 
*/