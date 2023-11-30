const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)               // Evento de desplazamiento en pantalla

checkBoxes()

function checkBoxes() {                                     // Definiendo el punto de acción
    const triggerBottom = window.innerHeight / 5 * 4        // window.innerHeigh nos devuelve la altura de la ventana

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top      // Devuelve valor TOP de la "caja"

        // Evaluaremos si el boxTop es menor que la parte inferior del disparador, de ser asi le agregamos el "show" o se lo quitamos

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
