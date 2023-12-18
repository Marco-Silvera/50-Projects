const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    const icon = faq.querySelector("i"); // Obtener el elemento <i> dentro de cada faq

    faq.addEventListener("click", () => {
        const isActive = faq.classList.contains("active");

        // Cambiar la clase del icono basado en el estado activo
        if (isActive) {
            faq.classList.remove("active");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-chevron-down");
        } else {
            faq.classList.add("active");
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-times");
        }
    });
});
