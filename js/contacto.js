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