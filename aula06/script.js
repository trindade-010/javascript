function verificar(){
    var data = new Date()
    var iano =data.getFullYear()
    var nas = window.document.getElementById('inascimento')
    var res = window.document.getElementById('res')
    if (nas.value.length == 0 || Number(nas.value) > iano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
       var fsex = document.getElementsByName('sex')
       var idade = iano - Number(nas.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        gênero = 'Homem'
        if(idade >= 0 && idade < 10 ){
            img.setAttribute('src', 'imagens/criançam.png')
        }else if (idade < 21){
            img.setAttribute('src', 'imagens/jovemm.png')
        }else if (idade < 50){
            img.setAttribute('src', 'imagens/adultom.png')
        }else { 
            img.setAttribute('src', 'imagens/idosom.png')
        }

       } else if (fsex[1].checked){
        gênero = 'Mulher'

        if(idade >= 0 && idade < 10 ){
            img.setAttribute('src', 'imagens/criançaf.png')
        }else if (idade < 21){
            img.setAttribute('src', 'imagens/jovemf.png')
        }else if (idade < 50){
            img.setAttribute('src', 'imagens/adultof.png')
        }else { 
            img.setAttribute('src', 'imagens/idosof.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}

