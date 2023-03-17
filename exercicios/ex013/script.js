// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

// Events
button.addEventListener('click', valor)

// Functions
function valor() {
    let val1 = Number(window.prompt('Digite um número:'))
    let val2 = Number(window.prompt('Digite outro número:'))
    if (val1 > val2) {
        res.innerHTML = `Analisando os valores <mark>${val1}</mark> e <mark>${val2}</mark>, o maior valor é <strong>${val1}</strong>`
    } else if (val1 < val2) {
        res.innerHTML = `Analisando os valores <mark>${val1}</mark> e <mark>${val2}</mark>, o maior valor é <strong>${val2}</strong>`
    } else {
        res.innerHTML = `Analisando os valores <mark>${val1}</mark> e <mark>${val2}</mark>, ambos são <strong>IGUAIS</strong>`
    }
}