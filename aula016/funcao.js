function parImpar (num) {
    if (num%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let num = 4

console.log(`O número ${num} é ${parImpar(num)}`)