// Global Variables
let cont = document.getElementsByTagName('button')[0]
let clean = document.getElementsByTagName('button')[1]
let res = document.getElementsByTagName('p')[0]
let num = 0

// Events
cont.addEventListener('click', contar)
clean.addEventListener('click', zerar)

// Functions

function contar() {
    num ++
    res.innerHTML = `<p>O contador está com <mark>${num}</mark> cliques.</p>`
}

function zerar() {
    num = 0
    res.innerHTML = ''
}