function tabuada() {
    let tab = document.getElementById('tab')
    let res = document.getElementById('txtb')

    if (tab.value.length == 0) {
        alert('Por favor digite um número!')
    } else {
        let t = Number(tab.value)
        for (let c = 1;c <= 10;c++) {
            let tot = t * c
            res.innerHTML += `${t} X ${c} = ${tot}`
        }
    }
}