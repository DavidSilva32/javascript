//Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

//Events
button.addEventListener('click', media)

//Functions
function media() {
    let nome = window.prompt('Qual é o nome do aluno?')
    if (nome.length == 0) {
        window.alert('Por favor, digite um nome!')
    } else if (nome.valueOf() <= 0 || nome.valueOf() > 0) {
        window.alert('Digite apenas um nome.')
    } else {
        let nota1 = window.prompt(`Qual foi a primeira nota de ${nome}`)
        let nota2 = window.prompt(`Além de ${nota1}, quak foi a outra nota de ${nome}`)
    }
}