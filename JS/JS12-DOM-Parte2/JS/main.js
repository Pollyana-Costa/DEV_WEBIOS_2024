//getElementById
let primeiroElemento = document.getElementById("primeiroElemento")
primeiroElemento.style.color = 'orange'
primeiroElemento.innerText = "Diet Balance"

let pegaClasse = document.getElementsByClassName('getClass')
for (i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'blueviolet'
}

let pegaName = document.getElementsByName("filho")
console.log(pegaName)

pegaName.forEach((elemento, indice) => {
    return pegaName[indice].style.color = 'red'
})

console.clear()

let byTagName = document.getElementsByTagName("p")
console.log(byTagName)

for(c = 0;c < byTagName.length; c++){
    byTagName[c].style.color = 'black'
    byTagName[c].style.backgroundColor = 'green'
    byTagName[c].style.borderRadius = '5px'
    byTagName[c].style.boxShadow = '5px 5px 5px #000000'
    byTagName[c].style.height = '40px'
}

let removendo = document.getElementById('remove1')
removendo.remove()

let recebeLista = document.getElementById('paiLista')
recebeLista.style.listStyle = 'none'