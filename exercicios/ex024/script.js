// Global Variables
const button = document.getElementsByTagName('button')[0]
const res = document.getElementById('resultado')

// Events
button.addEventListener('click', contar)

// Functions
function contar() {
    res.innerHTML += '<h2 class="mb-3">Contagem regressiva de 10 a 1</h2>'
    for (let i = 10;i >= 1;i--) {
        res.innerHTML += `${i} &#x1F449 `
    }
    res.innerHTML += '&#x1F3C1'
}