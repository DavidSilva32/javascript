// Global Variables
let button1 = document.getElementsByTagName('button')[0]
let button2 = document.getElementsByTagName('button')[1]
let button3 = document.getElementsByTagName('button')[2]
let button4 = document.getElementsByTagName('button')[3]
let res = document.getElementsByTagName('p')[0]

// Events
button1.addEventListener('click', acao1)
button2.addEventListener('click', acao2)
button3.addEventListener('click', acao3)
button4.addEventListener('click', acao4)

// functions
function acao1() {
    res.innerHTML += '<p>Clicou no primero botão</p>'
}

function acao2() {
    res.innerHTML += '<p>Clicou no segundo botão</p>'
}

function acao3() {
    res.innerHTML += '<p>Clicou no terceiro botão</p>'
}

function acao4() {
    res.innerHTML += '<p>Clicou no quarto botão</p>'
}

