var data = new Date()  

var hora = data.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if(hora < 12){
    console.log('Bom dia!')
} else if(hora < 16){
    console.log('Boa tarde!') 
} else{
    console.log('Boa noite')
}