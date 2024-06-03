class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        const taxa = 0.015;
        const desconto = this.salario * taxa;
        const novoSalario = this.salario - desconto;
        return {
            novoSalario: novoSalario
        }
    }

    contaCorrente() {
        const taxa = 0.036;
        const desconto = this.salario * taxa;
        const novoSalario = this.salario - desconto;
        return {
            novoSalario: novoSalario
        }
    }
    contaEstudante() {
        const taxa = 0.012;
        const desconto = this.salario * taxa;
        const novoSalario = this.salario - desconto;
        return {
            novoSalario: novoSalario
        }
    }
}

const conta1 = new ContaBancaria('Guilherme', 23, 2800, 'Masculino', '001', 'Poupança', '1450-6');
console.log("Conta Poupança:", conta1.contaPoupanca());

const conta2 = new ContaBancaria('Pollyana', 22, 2000, 'Feminino', '002', 'Corrente', '22457-9');
console.log("Conta Corrente:", conta2.contaCorrente());

const conta3 = new ContaBancaria('Pedro', 20, 1300, 'Masculino', '003', 'Estudante', '1435-5');
console.log("Conta Estudante:", conta3.contaEstudante());

