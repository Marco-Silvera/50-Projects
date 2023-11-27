const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// Detector de eventos
// Añade 'show-nav' al .container
open.addEventListener('click', () => container.classList.add('show-nav'))

// Elimina el 'show-nav' del .container
close.addEventListener('click', () => container.classList.remove('show-nav'))