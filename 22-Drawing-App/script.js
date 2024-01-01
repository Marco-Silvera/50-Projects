const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEL = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

// Inicializamos las variables

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y


// 'mousedown' es cuando se presiona el botón del mouse, 'isPressed' pasa a true y se almacenan las coordenadas (x, y)

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})


// 'mouseup' es cuando se suelta el botón del mouse, 'isPressed' pasa a false y se reinician las coordenadas (x, y)

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})


// 'mousemove' si el mouse se mueve
// Si esta siendo presionado se obtienen nuevas coordenadas del mouse (x2, y2) y dibuja un circulo y una linea entre las coordenadas antiguas y nuevas
// Se actualizan las coordenadas

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})


// Esta función dibuja un circulo con centro (x, y), un radio igual a 'size' y del color seleccionado

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}


// Esta función dibuja una linea desde (x1, y1) hasta (x2, y2) con un ancho 'size * 2' y del color seleccionado

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


// Actualiza el tamaño 'sizeEl' con el valor 'size'

function updateSizeOnScreen() {
    sizeEL.innerText = size
}


// botón de incremento de tamaño, en 5 y como limite 50

increaseBtn.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})


// botón de reducción de tamaño, en 5 y como limite 5

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})


// Cuando cambia el color se actualiza la variable 'color'

colorEl.addEventListener('change', (e) => color = e.target.value)


// Para borrar el contenido del canvas

clearEl.addEventListener('click', (e) => ctx.clearRect(0, 0, canvas.width, canvas.height))