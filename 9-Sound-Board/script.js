const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// Procedemos a recorrerlos cada uno
sounds.forEach(sound => {
    // Creamos botones
    const btn = document.createElement('button')
    // Le agregamos clase 'btn' para poder estilarlo
    btn.classList.add('btn')

    // Añadimos texto a los botones
    btn.innerText = sound

    // Reproduce audio cuando clickeamos
    btn.addEventListener('click', () => {
        // Función stopSongs
        stopSongs()

        // Reproduce audio
        document.getElementById(sound).play()
    })

    // Agregamos los botones como hijo del div con ID 'buttons'
    document.getElementById('buttons').appendChild(btn)


})

// Función para que no se reproduzca un audio encima de otro 
function stopSongs() {

    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}