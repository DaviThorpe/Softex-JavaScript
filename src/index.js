/* Crie um código JavaScript no back-end utilizando o Node.JS. 
No código, você deverá elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). 
Depois, faça um teste em aplicações de rota, como o Postman ou o Insomnia, 
para confirmar se o retorno está coerente com o que você programou.

Observação: os prints, ou o próprio código, devem ser divididos por arquivos. 
Por exemplo, o código de rotas está em um arquivo diferente do código de conexão.*/

// Inicio do código

var express = require('express');
var app = express();
var rota = require('./rota')
// Foi utilizado a extensão Router para "puxar"
// as informações de outro arquivo
app.use('/', rota)
app.listen(3333)
