// metodo ForFach
let frutas = ['banana, maça, melancia, kiwi, abacaxi, uva']

//exibir o nome e o indice, exemplo: NOME:BANANA// INDICE:0
//formato com for  
frutas.forEach(retornaInfo );
function retornaInfo(nomeFruta, indice){
         console.log(`nomeFruta: ${nomeFruta}`)
         console.log(`Indice: ${indice}`)
}
console.clear()

//Arrow function
frutas.forEach(retornaInfo);

function retornaInfo(nomeFruta, indice){
          console.log(`nomeFruta: ${nomeFruta}`)
          console.log(`Indice: ${indice}`)
}
//Arrow function

frutas.forEach((nomeFruta, indice) => {
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${indice}`)
})

//arrow function simplificado

frutas.forEach((teste) => console.log(teste)) // ele vai retornar apenas o nome e não vai retornar o indice // é uma forma mais enxuta

console.clear()

let tarefas = [
    { //posição 0 
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    { //posição 1
        id: 2,
        isPronta: false,
        nomeTarefa: "Trabalhar"
    },
    {//posição 2
        id: 3,
        isPronta: true,
        nomeTarefa: "Amar"
    },
]

//Arrow function

tarefas.forEach((tarefa) => console.log(tarefa.nomeTarefa))
console.clear()

//Metodo Map

let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt) //o sqrt pega o numeros e transforam em raiz quadrada

console.log("Array antigo " + numeros)
console.log("Novo Array "  + novoArray) 

let mapText = tarefas.map((retornaText) => {
    console.log(retornaText.nomeTarefa)
})

console.clear()

let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 89]

let resultado = numeros2.filter(retornaFiltro)
function retornaFiltro(num){
    return num > 30
}
console.log(resultado)

let tarefaFiltro = tarefas.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})
console.log(tarefaFiltro)

console.clear()

let sapatos = [
    {marca:"Nike", quantidade: 3},
    {marca:"Adidas", quantidade: 5},
    {marca:"Puma", quantidade: 7}
]
console.log(
sapatos.find((retornaFind) => {
   return retornaFind.marca = "Puma"
})
)
