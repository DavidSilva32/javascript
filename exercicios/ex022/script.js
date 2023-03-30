// Glbal Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementById('resultado')

// Events
button.addEventListener('click', contar)

// Functions
function contar() {
    res.innerHTML += '<h2 class="mb-3">Contando de 1 até 10, marcando os pares</h2>'
    for (let i = 1;i <= 10;i++) {
        if (i % 2 == 1) {
            res.innerHTML += `${i}&#x1F449`
        } else {
            res.innerHTML += `<mark>${i}</mark>&#x1F449`
        }
    }
    res.innerHTML += '&#127937'
}