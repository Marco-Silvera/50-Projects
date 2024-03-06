const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'We Love Programming!'

let idx = 1
let speed = 300 / speedEl.value

writeText()


// Efecto de escritura

function writeText() {


    // Actualiza el contenido del elemento con el id 'text' con un fragmento de la cadena de texto desde el inicio hasta el indice (0, idx)

    textEl.innerText = text.slice(0, idx)

    idx++


    // Verifica si el indice ha superado la longitud de la cadena, si es asi restablece el indice a 1 para reiniciar el efecto de escritura

    if (idx > text.length) {
        idx = 1
    }


    // Llama a la función writeText luego de un intervalo de tiempo determinado por'speed'

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)