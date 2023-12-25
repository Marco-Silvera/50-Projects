const smallCups = document.querySelectorAll('.small-cup')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')

updateBigCup();

smallCups.forEach((cup, idx) => {

    cup.addEventListener('click', () => { highlightCups(idx) });

})

function highlightCups(idx) {

    // Verifico si la ultima taza esta llena y reduzco el indice
    if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;

    // Si la taza clickeada está llena y la siguiente no, reduce el indice
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) idx--;

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {

    // Calculamos la cantidad de tazas llena
    const fullCups = document.querySelectorAll('.small-cup.full').length;

    // Total de tazas pequeñas
    const totalCups = smallCups.length

    // Si no hay tazas llena se oculta el porcentaje
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {

        //Si hay tazas llenas se muestra el porcentaje, se ajusta la altura y el texto
        percentage.style.visibility = 'visible';

        // 330px es la altura del vaso grande
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    // Si todas las tazas estan llenas se oculta el indicador de lo que falta
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {

        // Si no todas las tazas estan llenas, se muestra lo que falta por llenarse y actualiza el texto
        remained.style.visibility = 'visible';

        // El total son 2 Litros
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}