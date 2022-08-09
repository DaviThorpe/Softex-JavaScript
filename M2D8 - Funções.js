/*Instruções
Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.*/

// Inicio do código

function atleta (){
    console.log('A palavra “atleta” é geralmente usada para se referir a pessoas que praticam qualquer modalidade esportiva.')
}

function medalhas (vitorias){
    console.log(`O atleta possui ${vitorias} medalhas`)
}

var registro = (codigo) => {
    console.log(`Esse é o codigo de registro do atleta: ${codigo}`);
}

atleta()
medalhas(2)
registro ('007')
