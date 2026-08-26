let num = [5, 2, 8, 9, 3]

function mostraVetor(vetor){
    for(let i in vetor){
        console.log(`A posição ${i} tem o valor ${vetor[i]}`)
    }
}

mostraVetor(num)