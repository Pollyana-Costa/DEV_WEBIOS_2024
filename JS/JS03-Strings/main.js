//concatenar String
var string = "Os alunos estão"
var string2 = " reprovados"
var string3 = " ou aprovados?"
var num1 = 2
var num2 = 4
var olhai = " Os reprovados"

// + >> soma ou concatenação
console.log(string + string2 + string3)
console.log("Os alunos estão" + " reprovados" + " ou aprovados?")

//template string
console.log(`${string + string2 + string3 + ( num1 + num2 ) + olhai}`) 
//concatenar string e faz ao mesmo tempo uma conta matematica

console.clear()

//criar uma variavel que vai receber o seguinte texto = IOS fez uma excursão na TOTVS com três cabritinhos (alunos)

var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos (alunos)"

//I O S - T O T V S (Todos os caracteres contam, até os espaços)
//0 1 2 4 6 7 8 9 10

var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos (alunos)"
console.log(texto1.charAt(24))
console.log (texto1 [24])

console.clear()

//tamanho string

var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

//lenght conta quantos caracteres tem nas palavras.

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`na variavel texto3 tem ${texto3.length} caracteres`)

console.clear()

var texto4 = "aqui está tudo em minúsculo"
var texto5 = "AQUI ESTÁ TUDO EM MAIÚSCULO"

//UP = deixa as palavras em maiusculo
//low = deixa as palavras em minusculo

console.log(`Minusculo: ${texto5.toLowerCase()}`)
console.log(`Maiusculo: ${texto4.toUpperCase()}`)

console.clear()


//Substring = filtra os caracteres, sub é de subtrair
var str = "Mozilla"

// M O Z I L L A
// 0 1 2 3 4 5 6

console.log(str)
console.log(str.substring(1,3)) // O Z
console.log(str.substring(0,4)) // M O Z I

console.clear()

//  Replace = troca uma variável por uma outra.

var texto6 = "Olha a pipoca"
console.log(texto6.replace(`pipoca`,`Carreta Furacão`))

console.clear()

//Trim = retirar espaços no inicio e no fim da sua String (frase)

var texto7 = "                 Olha a carreta       "
console.log(texto7)
console.log(texto7.trim())

console.clear()






