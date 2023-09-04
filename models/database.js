const mysql = require('mysql2');

const connection = mysql.createConnection({
  /*
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9643884',
  password: 'E9n17we2yz',
  database: 'sql9643884',
  */
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agenda',
});

// Conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

module.exports = connection;