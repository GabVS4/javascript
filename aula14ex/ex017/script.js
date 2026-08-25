function gerarTabuada(){
    var numerotxt = window.document.getElementById('tabuadatxt')
    var numero = Number(numerotxt.value)

    var tabuada = window.document.getElementById('tabuada')

    tabuada.innerHTML = ''

    if (numerotxt.value == ''){
        alert('[ERRO] Digite um número!')
        tabuada.innerHTML = '<option>Digite um número acima</option>'
        return
    } else{
        for (var cont = 0; cont <= 10; cont ++){
            var result = numero * cont

            var item = document.createElement('option')
            item.text = `${numero} x ${cont} = ${result}`
            item.value = `tab${cont}`
            tabuada.appendChild(item)

            //tabuada.innerHTML += `<option>${numero} x ${cont} = ${result}</option>`
        }
    }
}