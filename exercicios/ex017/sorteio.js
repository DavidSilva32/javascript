// Global Variables
let button = []
button[0] = document.getElementsByTagName('button')[0]
button[1] = document.getElementsByTagName('button')[1]
let res = document.querySelector('section#resultado')

// Events
button[0].addEventListener('click', sorteio)
button[1].addEventListener('click', limpar)

// Functions
function sorteio() {
    let min = 1 
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() //Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark></p>`
}

function limpar() {
    res.innerHTML = null // vai  esvaziar a section toda
}