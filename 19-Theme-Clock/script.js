const hoursEl = document.getElementById('hour')
const minutesEl = document.getElementById('minute')
const secondsEl = document.getElementById('second')
const toggle = document.getElementById('toggle')
const dateEl = document.getElementById('date')
const timeEl = document.getElementById('time')

toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        // Si la clase 'dark' esta presente en el HTML
        // Elimina la clase 'dark' y cambia el texto del botón a 'Dark Mode'

        html.classList.remove('dark');
        toggle.innerHTML = 'Dark Mode'
    } else {
        // Si la clase 'dark' no esta presente en el HTML
        // Agrega la clase 'dark' y cambia el texto del botón a 'Light Mode'

        html.classList.add('dark');
        toggle.innerHTML = 'light mode'
    }
})

// Definimos los arreglos de dias y meses

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


// 'setInterval' se utiliza para ejecutar repetidamente una función

setInterval(() => {

    const time = new Date();
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const hour = time.getHours();
    const hourIn12Hour = hour % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour > 12 ? 'PM' : 'AM';

    // Establecemos el texto dentro de 'dateEl' y 'timeEl'

    dateEl.innerText = `${days[day]}, ${date} ${months[month]}`
    timeEl.innerText = `${hour}: ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`


    // Establecemos la rotación de 'hoursEl', 'minutesEl' y 'secondsEl'

    hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`
    minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
    secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`

})
