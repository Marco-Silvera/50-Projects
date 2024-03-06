const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`


// Llama a función 'ChangeSlide' con el argumento 'up'

upButton.addEventListener('click', () => changeSlide('up'))


// Llama a función 'ChangeSlide' con el argumento 'down'

downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {


    // Obtiene la altura del contenedor del slider y se almacena en 'sliderHeight'

    const sliderHeight = sliderContainer.clientHeight


    // Ajusta el índice de la slide activa dependiendo del valor 'direction'

    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}