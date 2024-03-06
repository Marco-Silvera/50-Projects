const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


// Creación de array 'message'

const message = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]


// Creación de array 'types'

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {


    // Se crea un 'div' y se le añade la clase 'toast'

    const notif = document.createElement('div')
    notif.classList.add('toast')


    // Si 'type' es verdadero se usa su valor, si es falso se llama a la función 'getRandomType'

    notif.classList.add(type ? type : getRandomType())


    // Si 'message' es verdadero se usa su valor, si es falso se llama a la función 'getRandomMessage'

    notif.innerText = message ? message : getRandomMessage()


    // Elimina el toast luego de 3000ms

    toasts.appendChild(notif)
    setTimeout(() => {
        notif.remove()
    }, 3000)
}


// Devuelve un mensaje aleatorio del array

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}


// Devuelve un tipo de mensaje aleatorio del array

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}