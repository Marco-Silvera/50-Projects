// Seleccionamos todos los elementos de clase "panel"
const panels = document.querySelectorAll(".panel");

// Iteramos entre los elementos "panel" con forEach para buscar el evento "click"
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        // Elimina los "active" de todos los paneles
        remoteActiveClasses();
        // Agrega "active" al panel clickeado
        panel.classList.add("active");
    });
});

// Esta funcion elimina el "active" de todos los paneles
const remoteActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};