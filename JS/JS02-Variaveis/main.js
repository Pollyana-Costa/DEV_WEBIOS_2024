//objeto console//

console.log("Hello World!")

//Quando trabalho com texto coloco o mesmo dentro de aspas duplas ou simples
//Variáveis: var, let, const
//Quero criar um espaço na memoria do computador chamado _Jujutsu e dizer que esse espaço na memoria irá receber o valor 8

var _Jujutsu = 8 
_Jujutsu = "Yuji Itadori" //pode redeclarar uma variável, é volátil

console.log(_Jujutsu)

let letsGo = 4 //não se pode redeclarar uma variável, somente UMA variável
letsGo = 3

console.log(letsGo)
console.clear() // limpa todo código que tiver acima dele no "inspecionar"

//const

const PI = 3.1415 //não pode redeclarar e nem alterar com um novo valor 

console.log(PI)
console.clear()

let NAN = 0/0

console.log(NAN)
console.clear()

let SãoPaulo = "Melhor time do mundo, tem todos os títulos" //variável recebe um texto = String

console.log(SãoPaulo)

console.clear()

let IOS= "Instituto da oportunidade social"
console.log(IOS)
console.log("Instituto + da + oportunidade + social")
console.clear()

var numero1 = 2
var texto = "Eu tenho "
var texto2 = " reais"

console.log(texto + numero1 + texto2) //contatenar serve para juntar as variáveis e textos (Strings)
console.clear()

//Valores Booleanos

var num1 = 1
var num2 = 1
//num é igual a num2?
//1 é igual a 1 = true
console.log(num1 == num2)