const addBtn = document.getElementById('add')

// Se obtienen las notas guardadas en el almacenamiento local y las parseamos como objetos JSON
const notes = JSON.parse(localStorage.getItem('notes'))

// Si existen notas guardadas anteriormente, se recorren y se agregan al DOM
if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {

    // Crea el div que representa a la nota
    const note = document.createElement('div')
    note.classList.add('note')

    // HTML de la nota
    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    // Se establece el valor del textarea y del div principal con el texto proporcionado
    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')

    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}

// Función para actualizar el almacenamiento local con el contenido de las notas
function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    // Iteramos sobre todos los textarea y los agregamos al array notes
    notesText.forEach(note => notes.push(note.value))

    // Convertimos el array de notas en formato JSON y lo guardamos en el almacenamiento local
    localStorage.setItem('notes', JSON.stringify(notes))
}