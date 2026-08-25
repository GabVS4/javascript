function contar(){
    let iniciotxt = window.document.getElementById('iniciotxt')
    let inicio = Number(iniciotxt.value)

    let fimtxt = window.document.getElementById('fimtxt')
    let fim = Number(fimtxt.value)

    let passotxt = window.document.getElementById('passotxt')
    let passo = Number(passotxt.value)

    let resultado = window.document.querySelector('div#resultado')

    resultado.innerHTML = ''

    if (iniciotxt.value == '' || fimtxt.value == '' || passotxt.value == ''){
        resultado.innerHTML += `Impossível Contar!`
        alert('[ERRO] Preencha todos os campos para continuar!!!')
        return
    } else if (passo <= 0){
        window.alert('Passo inválido! Considerando Passo = 1')
        let passo = 1
        escreve(inicio, fim, passo)
    } else{
        escreve(inicio, fim, passo)
    }
}

function escreve(start, end, step){
    if(end >= start) {
        for(let cont = start; cont <= end; cont += step){
        resultado.innerHTML += `${cont} ➡️`
        }
    } else {
        for(let cont = end; cont <= start; cont += step){
        resultado.innerHTML += `${cont} ➡️`
        }
    }
    resultado.innerHTML += `🏁`
}