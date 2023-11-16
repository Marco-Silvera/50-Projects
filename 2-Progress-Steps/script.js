// DOM elements
const circles = document.querySelectorAll(".circle"),
    progressBar = document.querySelector(".indicator"),
    buttons = document.querySelectorAll("button");

let currentStep = 1;

// Función que actualiza los steps y el DOM
const updateSteps = (e) => {
    // Actualiza el "Step" actual según el boton al que se clickeó
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

    // Recorta los "circles" y agrega o elimina el "active"
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });

    // Actualiza "progress-bar" según "currentStep"
    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

    // Comprueba si el "currentStep" (paso actual) es el ultimo o primer paso y desactiva los botones correspondientes
    if (currentStep === circles.length) {
        buttons[1].disabled = true;
    } else if (currentStep === 1) {
        buttons[0].disabled = true;
    } else {
        buttons.forEach((button) => (button.disabled = false));
    }

};

// Añadimos click event listeners para todos los botones
buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
});
