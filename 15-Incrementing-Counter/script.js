const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    // Inicio el contador en '0'
    counter.innerText = '0';

    const updateCounter = () => {

        // Obtengo el valor del atributo 'data-target'
        const target = counter.getAttribute('data-target')

        // Convierto el texto a número ('+'counter)
        const c = +counter.innerText;

        // Calculo incremento necesario para llegar al 'target' en 400 iteraciones
        const increment = target / 400

        // Si el valor actual es menor al objetivo
        if (c < target) {

            // Actualizo el contador sumando el incremento y redondeandolo hacia arriba
            counter.innerText = `${Math.ceil(c + increment)}`

            // Temporizador que llama a la función 'updateCounter' cada 1ms
            setTimeout(updateCounter, 1)
        } else {

            // Si valor actual es mayor o igual a target, ingreso target como texto
            counter.innerText = target
        }
    }

    updateCounter()
})
