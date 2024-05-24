//Função

function soma(num1, num2 , num3) { //parametros
    var num1 
    var num2
    var num3
 
return  num1 + num2 + num3; // 6
}

console.log(soma(2, 4, 6)) //com parenteses
// console.log(soma) //sem parenteses


//crie uma funçao que receba 4 valores e retorne apenas a media desses valores 

function media(soma1, soma2, soma3, soma4){
    //   var soma1
    //   var soma2
    //   var soma3
    //   var soma4
return (soma1 + soma2 + soma3 + soma4)/4; // forma simplificado, sem precisar adicionar var
}
console.log(media(4, 5, 6, 7, 8));
console.log("Nota na média")
console.clear()

const media2 = (soma1, soma2, soma3, soma4) => { //forma simplificada de utilizar o fuction: () => {}, que se chama arroz function 
    return(soma1 + soma2 + soma3 + soma4)/4
}
console.log(media2(5,5,5,5))

console.clear()

function onloadTela(){
    alert("Bem-vindo, sua tela ja recarregou, aproveite!")
    console.log("Recarregou a tela")
   
}

const clique = () => {
    alert("Bem-vindo você clicou em mim")
    console.log("Você clicou em um botão")

}
