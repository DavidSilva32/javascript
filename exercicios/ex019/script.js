// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.querySelector('section#resultado')

// Events
button.addEventListener('click', action)

// Functions
function action() {
    // Variables
    let valores = [Number(window.prompt('Primeiro valor:'))]
    valores[1] = window.prompt('Segundo valor:')
    let con = Number(window.prompt(`Valores informados: ${valores[0]} e ${valores[1]}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    res.innerHTML = '<h2>Calculando...</h2>'

    // Conditions
    switch (con) {
        case 1:
            res.innerHTML += `<p>${valores[0]} + ${valores[1]} = <strong>${valores[0]+valores[1]}</strong></p>`
            break
        case 2:
            res.innerHTML += `<p>${valores[0]} - ${valores[1]} = <strong>${valores[0]-valores[1]}</strong></p>`
            break
        case 3:
            res.innerHTML += `<p>${valores[0]} x ${valores[1]} = <strong>${valores[0]*valores[1]}</strong></p>`
            break
        case 4:
            res.innerHTML += `<p>${valores[0]} / ${valores[1]} = <strong>${(valores[0]/valores[1]).toLocaleString('pt-br')}</strong></p>`
            break    
        default:
            res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${valores[0]} e ${valores[1]}, mas não sei o que fazer com eles.`
            break    
    }
}