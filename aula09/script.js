function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    let res = document.querySelector('div#res')
   if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'Impossivel Contar !'
           window.alert('[ERRO] Faltam dados!')
        
   } else { 
     res.innerHTML = 'Contando: <br>'
     let i = Number(ini.value)
     let f = Number(fim.value)
     let p = Number(pass.value)
     if (p <= 0 ){
          window.alert('Passo inválido! Considerando Passa 1')
     }
     if (i < f){ //Contagem crescente
          for(let c = i ; c <= f ; c += p ){
          res.innerHTML += ` ${c} \u{1F449}`
     }
      } else {
          //Contagem regressiva
          for (let c = i; c >= f; c-= p){ 
               res.innerHTML += ` ${c} \u{1F449}`
          }
     }
       res.innerHTML += `\u{1F3C1}`
   }
}