let button = document.getElementById('button')
button.addEventListener('click', clicar)
let txt = document.getElementById('text')

function clicar() {
    let con = window.prompt('Digite uma temperatura em °C (Celsius)')
    if (con.length == '') {
        window.alert('Por favor, digite um número.')
    } else {
        txt.innerHTML = `<h2>A temperatura de ${con}°C, corresponde a...</h2>`
        let co = Number(con)
        txt.innerHTML += `<p>${co+273.15}°K (Kelvin)</p>
        <p>${(co*9/5)+32}°F (Fahrenheit)</p>`
    }
}