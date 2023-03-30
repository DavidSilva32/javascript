// Glbal Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementById('resultado')

// Events
button.addEventListener('click', contar)

// Functions
function contar() {
    res.innerHTML += '<h2>Contando de 1 até 10</h2>'
    for (let i = 1;i <= 10;i++) {
        res.innerHTML += `${i}&#x1F449`
    }
    res.innerHTML += '&#127937'
}