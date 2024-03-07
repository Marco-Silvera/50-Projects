const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

// Cantidad de cuadradon que se generarán
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // Añadimos un event listener para cambiar el color al pasar el ratón por encima
    square.addEventListener('mouseover', () => setColor(square))

    // Añadimos un event listener para quitar el color al mover el ratón fuera
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

// Función para establecer un color aleatorio a un elemento
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Función para eliminar el color y la sombra de un elemento
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

// Función para obtener un color aleatorio del array de colores
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}