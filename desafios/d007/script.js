let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', clicar)
let txt = document.getElementById('text')

function clicar() {
    let cot = window.prompt('Antes de mais nada. Quanto está a cotação do dolár agora?')
    if (cot.length == 0 || cot.valueOf() <= 0) {
        window.alert('Por favor, digite um número que ZERO.')
    } else {
        let money = window.prompt('Quantos R$ você tem na carteira?')
        if (money.length == 0 || money.valueOf() <= 0) {
            window.alert('Valor incoerente')
        } else {
            let conv = Number(cot)
            let mon = Number(money)
            let tot = conv * mon
            txt.innerHTML = '<h2>Valor total convertido:</h2>'
            txt.innerHTML += `${tot}US$`
        } 
    }
}