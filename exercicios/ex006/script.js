// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

//Events
button.addEventListener('click', clicar)

//Functions
function clicar() {
    let num = window.prompt('Digite um número:')
    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    } else if (num.valueOf() == 0) {
        window.alert('Digite um número maior que ZERO!')
    } else {
        let n1 = Number(num.valueOf())
        let n2 = Number(window.prompt('Digite outro número:'))
        res.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${n1+n2}</strong>!` 
    }
}