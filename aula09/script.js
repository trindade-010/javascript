function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
   if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
   } else { 
    alert('Tudo ok')
   }
}