//DOM é criado pelo browser, ou seja, o site.
//Passo a passo para acessar o DOM: Link com o arquivo HTML(main.js), depois chamar o DOM no JS
//Para acessar o DOM é só por no JS "document"

document.title = "Times"

prompt

var time = prompt("Qual o nome do time?")
if(time == "Sao Paulo"){
    alert("O time é São Paulo")
    document.body.style.backgroundColor = "red" //informa o background color
    let nomeTime = document.createElement('h1') //inserindo um texto
    nomeTime.innerHTML = "São Paulo - Rogério Ceni"
    document.body.appendChild(nomeTime)
    //createElement > serve para criar uma tag no HTML
    //innerHTML > inserir uma informação no HTML
}else if(time == "Corinthians"){
    alert("O time é o Corinthians")
    document.body.style.backgroundColor = "black"
    let nomeTime = document.createElement('h1') //inserindo um texto
    nomeTime.innerHTML = "Corinthians - Cássio"
    nomeTime.style.color = "white"
    document.body.appendChild(nomeTime)
}else if(time == "Palmeiras"){

    alert("O time é Palmeiras")
    document.body.style.backgroundColor = "green"
    let nomeTime = document.createElement('h1') //inserindo um texto
    nomeTime.innerHTML = "Corinthians - Cássio"
}else{

    alert("Não sei qual é esse time")
}


 //alguns exemplos dos metodos do window abaixo:

// window.alert("Bem vindo ao caos"); --> cria um pop it na tela
// window.confirm("Deseja realmente sair desse jogo?"); --> cria um pop it na nela com "ok" ou "cancelar"
// window.prompt("Deseja realmente sair desse jogo?"); --> cria um pop it onde voce pode enviar uma resposta
