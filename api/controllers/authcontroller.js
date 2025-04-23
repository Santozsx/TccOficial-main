const bcrypt = require('bcrypt');
const db = require('../db');

const register = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
  }

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ erro: 'Erro no banco' });
    if (results.length > 0) {
      return res.status(409).json({ erro: 'Email já cadastrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const senha_hash = await bcrypt.hash(senha, salt);

    db.query(
      'INSERT INTO usuarios (email, senha_hash) VALUES (?, ?)',
      [email, senha_hash],
      (err, result) => {
        if (err) return res.status(500).json({ erro: 'Erro ao salvar usuário' });
        res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
      }
    );
  });
};

module.exports = { register };


//Verifica se o email e senha foram enviados

//Verifica se o email já existe no banco

//Cria um hash seguro da senha com o bcrypt

//Insere o usuário no banco com o hash no lugar da senha