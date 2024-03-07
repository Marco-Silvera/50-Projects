const codes = document.querySelectorAll('.code')

// Enfocamos el primer elemento de 'codes' para que el cursor se posicione automáticamente ahí
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // Si se presiona un número, se borra valor actual del elemento y enfocamos el siguiente elemento después de un breve intervalo de tiempo
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if (e.key === 'Backspace') {
            // Se enfoca el elemento anterior en un breve intervalo de tiempo
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})