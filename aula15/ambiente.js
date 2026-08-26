let num = [5, 2, 8, 9, 3]

num[5] = 7

num.push(4)

console.log(num)

num.sort()

console.log(`Nosso vetor é ${num}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor de num é ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1){
    console.log (`O valor não foi encontrado`)
} else {
    console.log(`O valor foi parar na posição ${pos}`)
}