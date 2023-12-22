const toggle = document.getElementById("toggle")
const nav = document.getElementById("nav")

// Escucha el evento 'click'
toggle.addEventListener("click", () => {

    // Agrega y quita el 'active'
    nav.classList.toggle("active");
});