const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// Recupera los datos de la lista de tareas almacenados en el almacenamiento local y los convierte en un array de objetos
const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {

    // Previene el comportamiento predeterminado de enviar el formulario
    e.preventDefault()

    addTodo()
})

// Función para agregar una nueva tarea a la lista de tareas
function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    // Verifica si hay texto en el campo de entrada de texto
    if (todoText) {
        const todoEl = document.createElement('li')

        // Si la tarea proporcionada está completada, agrega la clase 'completed' al elemento de lista

        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        // Agrega un event listener para eliminar la tarea al hacer clic derecho en ella
        todoEl.addEventListener('contextmenu', (e) => {

            // Previene el menú contextual predeterminado
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

// Función para actualizar el almacenamiento local con los cambios en las tareas
function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    // Guarda el array 'todos' en el almacenamiento local después de convertirlo a formato JSON
    localStorage.setItem('todos', JSON.stringify(todos))
}