// Varriáveis globais - fora da função
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

button.addEventListener('click', clicar)

window.alert('Seja bem-vindo(a) ao meu site!')
function clicar(){
    let number = window.prompt('Digite um número:')
    if (number.length == 0) {
        window.alert('Por favor, digite um número com exeção do ZERO!')
    } else if (number.valueOf() == 0) {
        window.alert('Número inválido')
    } else {
        let num = Number(number.valueOf())
        res.innerHTML = `o dobro de ${number} é ${num*2} e a metade é ${num/2}`
    }
}