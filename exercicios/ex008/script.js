//Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

//Events
button.addEventListener('click', calcular)

//Functions
function calcular() {
    let num = window.prompt('Digite um número:')
    if (num.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${num}</strong></p><hr>`
        res.innerHTML += `<p>O valor absluto é ${Math.abs(num)}</p>`
        res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`
        res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(num)}</p>`
        res.innerHTML += `<p>A sua raisz quadrada é ${Math.sqrt(num)}</p>`
        res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(num)}</p>`
        res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>`
        res.innerHTML += `<p>O valor de ${num} <sup>3</sup> é ${Math.pow(num, 3)}</p>`
    }
}