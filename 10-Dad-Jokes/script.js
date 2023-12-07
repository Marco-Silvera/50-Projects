const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// Al presionar el boton se ejecutara la funcion 'generateJoke'
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    // Lo ingresamos como variable para tener un código más limpio
    const config = {
        // Agregamos los parametros requeridos por la página web
        headers: {
            // 'key': 'valor'   nos lo otorga la página web (Accept, application/json)
            'Accept': 'application/json'
        }
    }
    // `fetch('https://icanhazdadjoke.com/', config)` nos devolvera una promesa
    // por lo tanto usamos  el 1er '.then' para obtener el .json
    // el 2do '.then' nos sirve para obtener los datos 
    fetch('https://icanhazdadjoke.com/', config).then(response => response.json()).then(data => {
        /* Extraemos la key 'joke' del json en => data.joke
        Estructura del json:
            id: "YvkV8xXnj yd"
            joke: "Why did the cowboy have a wei..."
            status: 200

        Luego lo ingresamos en el div con id 'joke' en => jokeEl.innerHTML
        */
        jokeEl.innerHTML = data.joke
    })
}