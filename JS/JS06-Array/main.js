//Array pode ser chamado de vetor/vetores também

var numeros = [-2, 40, 16, 111, 33, 64]

console.log(numeros)
console.log(numeros[3])

var especiais = ["Mãe","Ceci","Pedro","Kevy","Guibas","Rosy","Sarah","Estherzinha"]
console.log(especiais[3], especiais[7])

console.clear()

var bidi = [
     //col0    col1    col2
    ['banana', 'maça', 'pêra'], //linha 0
    ['laranja', true, 1], //linha 1
    [null, 'uva', -350, 4566] //linha 2
    //col0 col1  col2  col3
]
console.log(bidi)
console.log(bidi[1][1])
console.log(bidi[2][2])

//para acessar info utilizando array bidi passamos no colchetes o indice da linha e depois coluna 

//Array bidi >> Crie um array bidimensional que contenha itens de mercado, o array deve ser feito com 4 linhas e em cada linha deve ter 4 produtos
//Retorne os seguintes valores no console : feijão, detergente, maçã e shampoo

console.clear()

var itens =[
    //col0     col1     col2     col3
    ["Pipoca", "arroz", " fejão", "batata"], //linha 0
    ["molho de tomate", "alface", "leite em pó", "detergente"], //linha1
    ["leite de coco", "candida", "maçã", "vinagre"], //linha2
    ["bolacha", "azeite", "limão", "shampoo"], //linha3
]

console.log(`${itens[0][2]} \n ${itens[1][3]} \n ${itens[2][2]} \n ${itens[3][3]}`)

console.clear()

let moeda = ["Real", "Euro", "Coroa","Dolar"]

console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)

console.clear()

//toString = transforma o numArray em uma string, que é um texto
let numArray = [2,4,6,8,10]
console.log(numArray)
var mudanca = numArray.toString();
console.log(mudanca)

console.clear()

//join = transforma array em string e muda o separador dos valores/informações, exemplo : vírgula
var teste1 = [5, 10, 15, 20, 25, 30]
console.log(teste1)
var mudanca2 = teste1.join(" // ")
var mudanca3 = teste1.toString()
console.log("Com o join")
console.log(mudanca2)
console.log("Com o toString")
console.log(mudanca3)

console.clear()

let array = [0, 2, 3, 5, 7]
console.log(array.length) //informa a quantidade de numeros

console.clear()

//Pop = remove sempre o último elemento do array, exemplo abaixo removeu o nome "Lude Mila"
let utilizaPop = ["Pollyana", "André","Felippe", "Lucas Nathan", "Esther", "Lude Mila"]
var mudanca4 = utilizaPop.pop()
console.log(mudanca4)
console.log(utilizaPop)

//Push = adiciona no final do array um novo elemento, exemplo abaixo adicionou o nome "Saraiva"
var mudanca5 = utilizaPop.push("Saraiva")
console.log(mudanca5)
console.log(utilizaPop)

console.clear()

//shift = remove o primeiro elemento do meu array, exemplo abaixo removeu o nome do carro Audi
var nomesCarros = ["Audi", "Celta", "Uno com escada", "HB20"]
console.log(nomesCarros)
var mudanca6 = nomesCarros.shift()
console.log(mudanca6)
console.log(nomesCarros)

console.clear()

//unshift = adiciona um novo elemento no inicio do array, exemplo abaixo adicionou a string "Nice"
var insereNoInicio = [true, 34, "Mano", "Socorro", "JS"]
console.log(insereNoInicio)
var mudanca7 = insereNoInicio.unshift("Nice")
console.log(mudanca7)
console.log(insereNoInicio)

console.clear()

//delete = deleta um elemento especificado, informando o caractere, exemplo abaixo foi a palavra "Mano" que é o caractere 2
var insereNoInicio = [true, 34, "Mano", "Socorro", "JS"]
delete insereNoInicio[2]
console.log(insereNoInicio)

