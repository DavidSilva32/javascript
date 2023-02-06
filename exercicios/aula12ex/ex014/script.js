function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if (hora >= 6 && hora <= 12) {
        //BOM DIA
        msg.innerHTML = `Agora são ${hora}:${min} da Manhã`
        document.body.style.background = '#CEBB87'
    } else if (hora > 12 && hora <= 18 ) {
        //BOA TARDE
        msg.innerHTML = `Agora são ${hora}:${min} da Tarde`
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#B17351'
    } else if (hora > 18 && hora < 24) {
        //BOA NOITE
        msg.innerHTML = `Agora são ${hora}:${min} da Noite`
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#081C1D'
    } else {
        //BOA MADRUGADA
        msg.innerHTML = `Agora são ${hora}:${min} da Madrugada`
        img.src = 'imagens/foto-madrugada.jpg'
        document.body.style.background = '#554266'
    }
}