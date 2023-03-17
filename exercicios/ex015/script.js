// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]

// Events
button.addEventListener('click', data)

// Functions
function data() {
    let meses = new Array('Jan', 'Fer', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semanas = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    let date = new Date
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let week = date.getDay()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    res.innerHTML = `<p>Dia: <mark>${day}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[month]}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${year}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${semanas[week]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hour}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${sec}</mark></p>`


}