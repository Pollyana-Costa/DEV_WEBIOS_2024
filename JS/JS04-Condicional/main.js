//IF
//Se todos os alunos estiverem com a blusa e o crachá então todos recebem 10
var todosDeCracha = false
//true == true >> true
//true == false >> false
// if >> SE // else >> SENAO

if(todosDeCracha == true){
  console.log("Todos recebem nota 10 em JS")
}else{
  
    console.log("Todos recebem nota 0 em JS")
}

console.clear()

var Numero1 = 5
var Numero2 = 3

// ? = if 
// : = else

Numero1 > Numero2 ? console.log("Numero1 é maior") : console.log("Numero1 é menor")

// if(Numero1 > Numero2){ //true
//     console.log("Numero1 é maior que Numero2")
// } else{ //false
//     console.log("Numero1 é menor que Numero2")
// }

console.clear()

//Se for janeiro = Verão / Junho = Outono / Outubro = Primavera / Senão for nenhum desses mandará a mensagem : Inverno

// if(mes == "JANEIRO"){
//     console.log("É verão")
// } else if( mes == "JUNHO"){
//     console.log("É outono")
// } else if( mes == "OUTUBRO"){
//     console.log("É primavera")
// } else{
//     console.log("É inverno")
// }

let mes = "JANEIRO"
switch(mes){

    case mes == "JANEIRO":
        console.log("É verão")
    break;   

    case mes == "JUNHO":
        console.log("É outono")
    break;

    case mes == "OUTUBRO":
        console.log("É primavera")
    break;
    
    default:
        console.log("É inverno")
    break;    
          
}
