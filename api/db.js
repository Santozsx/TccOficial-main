// api/db.js
const mysql = require('mysql2');

// 1) Cria um pool de conexões (mais eficiente que createConnection)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',      // adicione aqui sua senha, se houver
  database: 'simuapp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 2) Converte o pool para a API de Promises
const db = pool.promise();

// 3) Opcional: testa a conexão ao iniciar
db.getConnection()
  .then(conn => {
    console.log('✅ Conectado ao banco de dados (promise pool).');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao banco:', err);
  });

module.exports = db;
