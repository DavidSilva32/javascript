// Global Variables
const button = document.getElementsByTagName('button')[0]
const res = document.getElementById('resultado')

// Events
button.addEventListener('click', contar)

// Functions
function contar() {
    res.innerHTML += '<h2 class="mb-3">Números pares de 1 até 10</h2>'
    for (let i = 2;i <= 10;i += 2) {
        res.innerHTML += `${i} &#x1F449 `
    }
    res.innerHTML += '&#x1F3C1'
}