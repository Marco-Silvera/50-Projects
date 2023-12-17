const insert = document.getElementById('insert')

/* Agregamos un detector de eventos 'keydown' que es cuando se presiona una tecla del teclado */
window.addEventListener('keydown', (event) => {


    /* 'console.log(event)' Esto imprimirá por consola varios datos sobre la tecla presionada
    De los cuales eligiremos los que necesitamos, en este caso:

        key: d
        keyCode: 68
        code: keyD

    */

    /* *Linea 20* Si la 'key' es ' ' (cadena vacía) entonces coloca 'Space' de lo contrario pone el valor 'key' */

    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `
})