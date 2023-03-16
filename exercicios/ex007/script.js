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
        let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
        let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}`))
        res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`
        res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark></p>`
        res.innerHTML += `<p>A média final será ${(nota1+nota2)/2}</p>`
    }
}