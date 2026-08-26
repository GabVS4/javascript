function fatorial(n) { //RECURSIVIDADE
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

let num = 5
console.log(`Fatorial de ${num} é ${fatorial(num)}`)