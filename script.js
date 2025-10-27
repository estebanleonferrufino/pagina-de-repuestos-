// Mostrar páginas internas
function showPage(page) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));

    // Mostrar solo la página seleccionada
    const selectedPage = document.getElementById("page-" + page);
    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Quitar clase activa de todos los botones
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.classList.remove("active"));

    // Activar el botón correspondiente
    const activeButton = document.querySelector(
        `.nav-link[onclick="showPage('${page}')"]`
    );
    if (activeButton) {
        activeButton.classList.add("active");
    }

    // Cerrar el panel de contacto si estaba abierto
    const contactPanel = document.getElementById("contact-panel");
    if (contactPanel.classList.contains("active")) {
        contactPanel.classList.remove("active");
    }
}

// Abrir/cerrar el panel de contacto
function toggleContact() {
    const panel = document.getElementById("contact-panel");
    panel.classList.toggle("active");
}
