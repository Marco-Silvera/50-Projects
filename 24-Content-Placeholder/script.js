const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')


// Retrasa la ejecución de la función 'getData' en 2500ms

setTimeout(getData, 2500)

function getData() {


    // Se establecen los datos y se quitan las animaciones

    header.innerHTML =
        '<img src="images/bg.avif" alt=""/>'

    title.innerHTML =
        "Lorem ipsum dolor sit amet"

    excerpt.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"

    profile_img.innerHTML =
        '<img src="images/profile.png" alt=""/>'

    name.innerHTML = 'Jhon Deo'

    date.innerHTML = 'Oct 06, 2021'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'))

}