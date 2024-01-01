const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')


// 'dragstart' se activa cuando se inicia el arrastre

fill.addEventListener('dragstart', dragStart)


// 'dragend' se activa cuando se completa el arrastre

fill.addEventListener('dragend', dragEnd)


// Bucle que itera sobre los elementos de clase 'empty'

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}


// Añade la clase 'hold' y cambia la clse a invisible luegod de 0ms

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}


// Se ejecuta cuando termina el arrastre, restaura la clase del elemento arrastrado a 'fill'

function dragEnd() {
    this.className = 'fill'
}


// Se ejecuta cuando se esta arrastrando un elemento
// 'e.preventDefault()' evita el comportamiento del navegador para permitir que el elemento sea soltado en ese lugar

function dragOver(e) {
    e.preventDefault()
}


// Se ejecuta cuando el elemento arrastrado pasa por el área de destino y añade la clase ' hovered' al elemento destino

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}


// Se ejecuta cuando el elemento arrastrado sale del elemento destino y restaura la clase del elemento destino a 'empty'

function dragLeave() {
    this.className = 'empty'
}


// Se ejecuta cuando se suelta el elemento arrastrado en el área de destino
// Restaura la clase del área destino a 'empty' y agrega el elemento arrastrado 'fill' como hijo del área destino
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}

