const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root',      
    password: 'root',    
    database: 'simuapp'
});

db.connect((err) =>{
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});

module.exports = db



//As credenciais devem ser substituídas pelas suas.

//Esse módulo será usado em qualquer parte do projeto que precise interagir com o banco.