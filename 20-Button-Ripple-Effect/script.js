const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        // Se obtiene las coordenadas (x, y) del cursor al hacer clic

        const x = e.clientX
        const y = e.clientY


        // Se obtiene las coordenadas (top, left) del borde superior izquierdo del botón

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


        // Se restan las coordenadas

        const xInside = x - buttonLeft
        const yInside = y - buttonTop


        // Se crea un elemento 'span' y se le añade la clase 'circle' y se establece su posición con las coordenadas de antes

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'


        // Se agrega como hijo del botón

        this.appendChild(circle)


        // Se programa la eliminación del 'span' luego de 500ms

        setTimeout(() => circle.remove(), 500)
    })
})