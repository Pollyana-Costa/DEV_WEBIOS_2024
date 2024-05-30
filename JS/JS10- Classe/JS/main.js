// Class
// Objetos é composta por duas coisas:
// Propriedades: Caracteristicas e Metodos = Funcionalidades
class Carro{
    constructor(nome, ano ){ // Molde de um objeto
       this.nome = nome; 
       //O que está antes do sinal de igual é uma propriedade que com o this sabemos que pertence a classe e o que está depois do sinal de igual sabemos que é um parametro
       this.ano = ano;
    }
// Funcionalidade para saber quantos anos o carro; ano atual - o ano da criação
//This = isso.
// variavel nome/propriedade sempre pertencem a isso; isso o que? Pertecem a classe que você acabou de criar.


anoCarro(anoAtual){
    return anoAtual - this.ano;
    //anoAtual = 2024
    //this.ano = 2012
}
}
// new = novo
// criar uma nova copia da classe = istancie

let carro1 = new Carro("KWID", 2012);
let carro2 = new Carro("MOBI", 2015);
let carro3 = new Carro("HB20", 2020);
let carro4 = new Carro("Skyline", 2008);

console.log(carro1)
console.log(carro2)
console.log(carro3)
console.log(carro4)


let anoAtual = new Date(); // 2024 - 2012 = 12
let recebeAno = anoAtual.getFullYear(); //2024
console.log(anoAtual)
console.log(recebeAno)
console.log(carro1.anoCarro(recebeAno)) //ano = 202

// 2026 - 2012 = 14
