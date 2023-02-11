function clicar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let n1 = Number(inicio.value)
    let n2 = Number(fim.value)
    let n3 =  Number(passo.value)
    let res = document.getElementById('res')
    
    if (n3 -= 0) {
        window.alert('ERRO')
    } else {
        while (n1<=n2) {
            res.innerHTML = 'Contando:'
            res.appendChild = `oi ${n1}`
            n1 =  n1 + n3
        }
    }    
}    