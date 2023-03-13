let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', clicar)

function clicar() {
    let res = window.prompt('Qual é seu nome?')
    if (res.length == 0) {
        window.alert('Você esqueceu de digitar seu nome!')
    } else {
        window.alert(`Olá, ${res}. É um prazer te conhecer"`)
    }
}