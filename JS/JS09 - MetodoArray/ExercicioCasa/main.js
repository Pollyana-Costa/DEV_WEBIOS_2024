// Exercicio 1

var numeros = [17,43,8,4,97,56,29]
numeros.forEach(function(numbers) {

    if (numbers % 2 === 0) {
        console.log(`${numbers} é par`);
    } else {
        console.log(`${numbers} é ímpar`);
    }
})

// Exercicio 2

let numeros2 = [17,43,8,4,97,56,29,3,75,34,88,82,61]
let resultado = numeros2.filter((resultado) => {
    return resultado >= 20 && resultado <= 80;
})
 console.log(resultado)



