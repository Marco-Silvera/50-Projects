const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        screens[1].classList.add('up')
        // Crea un insecto después de un segundo
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    // Inicia un intervalo para aumentar el tiempo cada segundo
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')

    // Obtiene una posición aleatoria para el insecto
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    // Crea la imagen del insecto dentro del elemento 'insect' con la imagen seleccionada
    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}

// Función para obtener una ubicación aleatoria dentro de la ventana del navegador
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight

    // Genera coordenadas X y Y aleatorias dentro de la ventana del navegador
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

// Función para atrapar un insecto
function catchInsect() {
    increaseScore()

    // Agrega la clase 'caught' al insecto clickeado
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

// Función para agregar más insectos al juego
function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if (score > 19) {
        message.classList.add('visible')
    }

    // Actualiza el elemento 'scoreEl' con la puntuación actualizada
    scoreEl.innerHTML = `Score: ${score}`
}