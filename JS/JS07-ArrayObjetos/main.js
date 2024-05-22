//Objetos

let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "Preto",
    nome: "Caio",
    sobrenome: "Maciel",
    hobbie: ["Futebol", "LOL", "Tocar guitarra", "Ouvir Musica"],
    // criar outro objeto
    endereco: {
        rua: "Jao medeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "SP  "
    }
}

//para aparecer somente um tópipo especifico de informações, tem que por o nome da variavel.(topico)
console.log(pessoa)
console.log(pessoa.nome)//retornar apenas uma propriedade
console.log(pessoa.hobbie) //retorna todos os hobbies
console.log(pessoa.hobbie[1]) //retorna apenas UM hobbie
console.log(pessoa.endereco) //retorna todo o endereço
console.log(pessoa.endereco.estado) //retornar apenas UMA informação do endereço

console.clear()

let tarefa = [
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
    }

]

console.log(tarefa)
console.log(tarefa[1]) //retornar um objeto
console.log(tarefa[1].nomeTarefa)    //retonra uma unica propriedade de um objeto

console.clear()
//JSON = utilizado para transformar os objetos todos em texto = string, pois texto ocupa menos espaço no computador
let recebeJSON = JSON.stringify(pessoa)
console.log(recebeJSON)

console.clear()

var JSONITO = '{ "corDosOlhos": "verde", "altura": 1.7, "corCabelo": "Preto", "nome": "Caio", "sobrenome": "Maciel", "hobbie": ["Futebol", "LOL", "Tocar guitarra", "Ouvir Musica"], "endereco": { "rua": "Jao medeiro", "numero": 234, "cidade": "São Paulo", "estado": "SP  " } }'
console.log(JSONITO)
console.log(JSON.parse(JSONITO)) // parse = faz voltar tudo que estava em texto em um objeto novamente


