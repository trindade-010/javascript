var agora = new Date()
var diaSem = agora.getDay()
var hora = new Date()
var momento = hora.getHours()
var mes = new Date()
var dia = mes.getDate()
var ano = new Date()
var iano = ano.getFullYear()
var imes = new Date()
var me = imes.getMonth()
console.log(`hoje é o dia ${dia} do ${me} de ${iano}`)
console.log(`Agora são ${momento}h`)
//console.log(diaSem)
switch(diaSem){
    case 0: console.log('Domingo') 
    break

    case 1: console.log('Segunda-feira')
    break

    case 2: console.log('Terça-feira')
    break

    case 3: console.log('Quarta-feira')
    break

    case 4: console.log('Quinta-feira')
    break


    case 5: console.log('Sexta-feira')
    break

    case 6: console.log('Sábado')
    break

    default: console.log("[ERRO] dia inválido")
    break
}