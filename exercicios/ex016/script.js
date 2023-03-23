// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]
let date = new Date
let year = date.getFullYear()

// Events
button.addEventListener('click', calcular)

// Functions
function calcular() {
    let ano = Number(window.prompt('Em que ano você nasceu?'))
    if (ano.valueOf() == 0) {
        window.alert('ERRO [nome de nascimento inválido]')
    } else {
        res.innerHTML = `Quem nasceu em ${ano} vai complentar <strong>${year-ano}</strong> anos em ${year}`
    }
}