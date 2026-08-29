let listaArray = []

let resposta = window.document.getElementById('resposta')
let numtxt = window.document.getElementById('numtxt')
let lista = window.document.getElementById('lista')

function adicionar(){
    //lista.innerHTML = ''
    let numero = Number(numtxt.value)

    if (numtxt.value == ''){
        alert('[ERRO] Digite um número!')
        tabuada.innerHTML = '<option>Digite um número acima</option>'
        return
    } else{
        estaNaLista(numero, listaArray)
    }
    resposta.innerHTML = '<input type="button" value="Finalizar" onclick="finalizar()">'

    numtxt.value = ''
    numtxt.focus()
}

function finalizar(){
    resposta.innerHTML = '<input type="button" value="Finalizar" onclick="finalizar()">'

    if(listaArray.length == 0){
        alert('Adicione valores antes de finalizar!')
        return
    } else {
        quantidadeValores(listaArray)
        maiorValor(listaArray)
        menorValor(listaArray)
        somaValores(listaArray)
        mediaValores(listaArray)
    }
}

function estaNaLista(valor, l) {
    if (l.includes(valor) || valor < 1 || valor > 100) {
        alert('Esse valor é inválido ou já foi adicionado!')
    } else {
        listaArray.push(valor)
        let item = document.createElement('option')
        item.text = `Valor ${valor} adicionado.`

        lista.appendChild(item)
    }
}

function quantidadeValores(lista){
    let quantidade = lista.length
    resposta.innerHTML += `<p>Ao todo, temos ${quantidade} números cadastrados.</p>`
}

function maiorValor(lista) {
    let maior = 0

    for (let cont in listaArray) {
        if (lista[cont] > maior) {
            maior = lista[cont]
        }
    }
    resposta.innerHTML += `<p>O maior valor é informado ${maior}.</p>`
}

function menorValor(lista) {
    let menor = 100

    for (let cont in listaArray) {
        if (lista[cont] < menor) {
            menor = lista[cont]
        }
    }
    resposta.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
}

function somaValores(lista){
    let soma = 0

    for (let cont in listaArray){
        soma += lista[cont]
    }
    resposta.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
}

function mediaValores(lista){
    let soma = 0

    for (let cont in listaArray){
        soma += lista[cont]
    }
    let media = soma/lista.length
    resposta.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
}

