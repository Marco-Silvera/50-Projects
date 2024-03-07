const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

// Obtiene datos inicialmente
getData()

// Escucha cambios de entrada
filter.addEventListener('input', (e) => filterData(e.target.value))

// Función asincrona para obtener datos de la API
async function getData() {

    // Realiza solicitud a la API para obtener datos de usuario aleatorios
    const res = await fetch('https://randomuser.me/api?results=50')

    // Extrae los resultados de la respuesta JSON
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        // Agrega el elemento de lista al elemento 'result'
        result.appendChild(li)
    })
}

// Función para filtrar los datos según el término de búsqueda
function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {

            // Si coincide, remueve la clase 'hide' para mostrar el elemento
            item.classList.remove('hide')
        } else {

            // Si no coincide, agrega la clase 'hide' para ocultar el elemento
            item.classList.add('hide')
        }
    })
}
