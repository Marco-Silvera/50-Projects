const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// Da foco al elemento de texto con ID 'textarea'
textarea.focus()

// Evento de escucha al evento 'keyup' (cuando se suelta una tecla)
textarea.addEventListener('keyup', (e) => {
    // Llama a la función createTags pasando el valor actual del elemento de texto
    createTags(e.target.value)

    // Verifica si la tecla presionada es 'Enter'
    if (e.key === 'Enter') {
        // Se establece un temporizador para limpiar el contenido del elemento de texto después de 10 ms
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        // Llama a la función randomSelect
        randomSelect()
    }
})

// La función createTags toma un input, lo divide en tags y los agrega al elemento con ID 'tags'
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    // Limpia el contenido del elemento con ID 'tags'
    tagsEl.innerHTML = ''

    // Para cada tag, crea un elemento span, le asigna una clase 'tag' y agrega el texto del tag
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// La función randomSelect que destaca aleatoriamente tags en intervalos de 100 ms
function randomSelect() {
    const times = 30

    // Se establece un intervalo que se ejecuta cada 100 ms
    const interval = setInterval(() => {
        // Obtiene un tag aleatorio y lo destaca
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        // Establece un temporizador para quitar el resaltado del tag después de 100 ms
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    // Establece un temporizador para detener el intervalo después de cierto tiempo (30 * 100 ms)
    setTimeout(() => {
        clearInterval(interval)

        // Establece un temporizador para resaltar un tag aleatorio después de detener el intervalo
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// Define la función pickRandomTag que devuelve un tag aleatorio de los elementos con clase 'tag'
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// La función highlightTag agrega la clase 'highlight' a un tag
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// La función unHighlightTag elimina la clase 'highlight' de un tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}