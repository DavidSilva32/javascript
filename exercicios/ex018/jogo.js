// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.querySelector('section#resultado')

let dif = 100 - 1
let ran = Math.random()
let num = 1 + Math.trunc(dif * ran)

// Events
button.addEventListener('click', adivinhar)

// Function
function adivinhar() {
    let palpite = Number(window.prompt('Qual é seu palpite?'))
    if (palpite > 100) {
        window.alert('[DICA] Digite um número entre 1 e 100.')
    } else if(palpite > num) {
        res. innerHTML += `<p>Você falou ${palpite}. Meu valor é <strong>MENOR</strong></p>`
    } else if (palpite < num) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu valor é <strong>MAIOR</strong></p>`
    } else {
        res.innerHTML += `<p><strong>Parabéns!</strong> Você acertou! Eu tinha sorteado o valor ${num}!</p>`
    }
}