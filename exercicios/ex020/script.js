// Global Variables
let button = document.getElementsByTagName('button')[0]
let res = document.getElementById('resultado')
let estacao = 

// Events
button.addEventListener('click', descubir)

// Functions
function descubir() {
    let mes = prompt('Digite o mês em extenso (Ex: Setembro)')
    if (mes == '') {
        alert('Mês inválido!')
    } else {
        switch (mes.toUpperCase()) {
            case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
                estacao = 'VERÃO'
                break 
            case 'ABRIL': case 'MAIO': case 'JUNHO': 
                estacao = 'OUTONO'
                break 
            case 'JULHO': case 'AGOSTO': case 'SETEMBRO': 
                estacao = 'INVERNO'
                break
            case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': 
                estacao = 'PRIMAVERA'
                break           
        }
        res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.`   
    }
}