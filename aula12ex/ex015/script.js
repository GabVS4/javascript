function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var faon = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (faon.value.length == 0 || faon.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(faon.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/HB.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', 'imagens/HJ.jpg')
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/HA.jpg')
            }else {
                img.setAttribute('src', 'imagens/HI.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/MB.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', 'imagens/MJ.jpg')
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/MA.jpg')
            }else {
                img.setAttribute('src', 'imagens/MI.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}