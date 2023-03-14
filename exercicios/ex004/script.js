//Variáveis globais - fora da função
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

button.addEventListener('click', clicar)

function clicar() {
    let name = window.prompt('Qual é seu nome?')
    if (name.length == 0) {
        window.alert(`Você esqueceu do seu nome! \u{1F61B}`)
    } else {
        res.innerHTML = `<p>Olá, ${name}! É um grande prazer te conhecer \u{1F596}!</p>`
    }
}