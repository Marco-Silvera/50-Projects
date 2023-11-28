const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')       // Añade y quita el active
    input.focus()                           // Enfoca el input al expandirse
})