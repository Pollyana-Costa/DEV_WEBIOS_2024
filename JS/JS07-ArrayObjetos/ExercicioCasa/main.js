
let alunos = [
    {
    nome: "Ana", //0
    idade: 17,
    nota: 8,
    ano: "2B"
   },
   {
    nome: "Bruno", //1
    idade:16,
    nota: 6,
    ano: "2C"
   },
   {
    nome: "Veronica", //2
    idade: 16,
    nota: 9,
    ano: "2C"
   },
   {
    nome: "Marta", //3
    idade: 15,
    nota: 5,
    ano: "3C"
   },
   {
    nome: "Brenno", //4
    idade: 19,
    nota: 6,
    ano: "3C"
   },
   {
    nome: "Maria", //5
    idade: 14,
    nota: 4,
    ano: "1F"
   }
]
console.log(alunos)
console.log(alunos[1]) //retornando somente as informações do aluno Bruno
console.log(alunos[5].nota) // retornando somente a "nota" da aluna Maria 

var JSON = JSON.stringify(alunos) //transformando a Array em formato JSON = texto.
console.log(JSON)