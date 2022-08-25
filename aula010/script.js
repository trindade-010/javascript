function tabuada() {
    var tab = document.getElementById('txtn')
    var num = document.getElementById('seltab')
    if (tab.value.length == 0 ){
        window.alert('Por favor, digite um número!')

    } else {
        var n = Number(tab.value)
        var c = 1
        num.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `num${c}`
            num.appendChild(item)
            c++
            
        }
    }
    
}