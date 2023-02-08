function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verificar os daods novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-masc.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-masc.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-masc.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-masc.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-fem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-fem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-fem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
