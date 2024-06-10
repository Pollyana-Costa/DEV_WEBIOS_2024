//Primeiro botão

 function adicionarImagem(){
    let img = document.createElement('img');
    img.src='./assets/img/umbrellaAcademy.jpg';
    document.body.appendChild(img);
    document.body.style.backgroundColor = '#262525';
 }

//Segundo Botão

 function exibirMensagem(){
    let nome = window.prompt('Qual seu nome, aventureirx?');
    if (nome) { 
        let boasVindas = document.getElementById("BoasVindas"); 
        boasVindas.textContent = `Olá ${nome}, bem-vindo à nossa academia!`; 
    }
 }

 //Terceiro Botão

 function calcularTabuada() {
    let numero = window.prompt('Digite aqui um número de 1 a 10 que você considera o seu número e tenha acesso a tabuada dele.');
    if (!isNaN(numero)) {
        numero = parseInt(numero);
        if (numero >= 1 && numero <= 10) {
            let tabuada = "";
            for (let i = 1; i <= 10; i++) { 
                tabuada += `${numero} x ${i} = ${numero * i}<br>`;
            }
            let resultadoTabuada = document.getElementById("resultadoTabuada");
            resultadoTabuada.innerHTML = tabuada;
        } else {
            alert("Por favor, digite um número entre 1 e 10.");
        }
    }
 }