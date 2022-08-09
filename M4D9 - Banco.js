/*Instruções do projeto
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.*/

// Inicio do código

class Banco {
    constructor(numConta, saldo, tipoConta, agencia) {
	this.numConta = numConta;
	this.saldo = saldo;
	this.tipoConta = tipoConta;
	this.agencia = agencia;
    }
	mostrarsaldo (){
        console.log(`Saldo atual ${this.saldo}`)
    }
    deposito (ValorDeposito){
        this.saldo += ValorDeposito
        console.log(`Valor depositado ${ValorDeposito}`)
    }
    saque (ValorSaque){
        this.saldo -= ValorSaque
			console.log(`Valor sacado ${ValorSaque}`)
    }
    conta (){
        console.log(`Conta: ${this.numConta}.`)
    }
}

var nova_conta1 = new Banco ('001',0, 'conta corrente', "0001")

nova_conta1.deposito(3000)
nova_conta1.mostrarsaldo()
nova_conta1.saque(1500)
nova_conta1.mostrarsaldo()
nova_conta1.deposito(3000)
nova_conta1.mostrarsaldo()
nova_conta1.conta()

var nova_conta2 = new Banco ('002',0, 'conta poupança', "0001")

nova_conta2.deposito(5000)
nova_conta2.mostrarsaldo()
nova_conta2.saque(4500)
nova_conta2.mostrarsaldo()
nova_conta2.deposito(2000)
nova_conta2.mostrarsaldo()
nova_conta2.conta()
