function calcular(){
    let recebeValor = document.getElementById("input").value//recebe o valor escrito no input
    let converter = recebeValor * 1.17 + 215
    let mostraResultado = document.createElement('valor')
    mostraResultado.innerHTML = `Seu ajuste salarial é de ${converter}`
    document.body.appendChild(mostraResultado)
}