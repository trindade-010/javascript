var agora = new Date() 
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora< 5){
    console.log('Boa madrugada!')
} else if (hora < 12){
    console.log('Bom dia')
} else if (hora ==12){
    console.log('bom, meio dia!')
}else if (hora < 18){
    console.log('boa tarde!')
} else {
    console.log('Boa noite!')
}