// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

// Events
button.addEventListener('click', parimp)

// Function
function parimp() {
    let num = Number(window.prompt('Digite um número'))
    if (num % 2 == 0) {
        res.innerHTML = `O número ${num} que foi digitado é <strong>PAR!</strong>`
    } else {
        res.innerHTML = `O número ${num} que foi digitado é <strong>ÍMPAR!</strong>`
    }
}