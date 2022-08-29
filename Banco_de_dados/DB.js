// Implemente e trate uma conexão com o seu banco de dados, 
// usando JavaScript. Caso a conexão com o banco tenha sucesso, 
// ele deve retornar uma frase positiva. Se isso não ocorrer, 
// retorne uma frase informando o erro.


const Sequelize = require('sequelize');
const sequelize = new Sequelize ('DB', 'root', '1909',
{host: "localhost",
    dialect:'mysql'
});

sequelize.authenticate()
.then(() => {
	console.log('Conexão com o banco de dados realizada com sucesso')
}) 
.catch(() => {
	console.log('Erro ao conectar com o banco de dados')
}); 

module.exports = sequelize;
