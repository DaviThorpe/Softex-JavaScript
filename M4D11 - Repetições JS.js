/* Instruções do projeto
Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto 
e a segunda, os elementos do array.*/

// Inicio do código

var Carro = new Object();

Carro.tracao = "4x4";
Carro.modelo = "Jeep";
Carro.ano = 2022;

for (var prop in Carro) {
    console.log(prop + ":" + Carro[prop])
}

var modelos_carro = ['Honda','BMW','Porche'];
for (const e of modelos_carro){
    console.log(e)
}
