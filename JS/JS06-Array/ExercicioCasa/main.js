
 var uni = ["HTML", "1993", "CSS", "1996", "Bootstrap", "2011", "JS", "1995", "React", "2013", "Java", "1995"
 ]          //0       1       2       3         4         5       6      7       8       9       10      11
 console.log(uni)
 console.log(uni.length)
 console.log(uni[6])

 //transformando a array em uma string
 var transforma1 = uni.toString()
 console.log(transforma1)
 //trocando o separado "," por "/"
 var transforma2 = uni.join("/")
 console.log(transforma2)
 //adicionando informação nova
var transforma3 = uni.unshift("IOS")
console.log(uni)

//criando uma Array bidimensional

var bidi = [

    ["HTML","1993","CSS","1996"],
    ["Booststrap","2011","JS","1995"],
    ["React","2013","Java","1995"]
]
console.log(bidi)
console.log(bidi.length) //informando o tamanho da Array
console.log(bidi[2][1]) //retornando apenas o ano"2013"
bidi[1][2] ="JavaScript" //trocando a informação "JS" por "JavaScript"
console.log(bidi)
delete bidi[2][2] //removendo a informação "Java" da Array
console.log(bidi)

var transforma4 = bidi.push("Pipoca") //adicionando a palavra "Pipoca" no final da Array
console.log(bidi)
