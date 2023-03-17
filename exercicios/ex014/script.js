// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementsByTagName('p')[0]
let date = new Date

// Events
button.addEventListener('click', data)

// Functions
function data() {
    res.innerHTML = `<p>O que recebi do sistema foi <mark>${date}.</mark></p>`
}