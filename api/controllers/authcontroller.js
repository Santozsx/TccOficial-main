const bcrypt = require('bcrypt');
const db = require('../db'); // já é pool.promise()

const register = async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  try {
    const [existe] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

    if (existe.length > 0) {
      return res.status(409).json({ erro: 'Email já cadastrado' });
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    await db.execute(
      'INSERT INTO usuarios (nome, sobrenome, email, senha_hash) VALUES (?, ?, ?, ?)',
      [nome, sobrenome, email, senha_hash]
    );

    return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
  } catch (err) {
    console.error('Erro ao registrar:', err);
    return res.status(500).json({ erro: 'Erro interno no servidor' });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
  }

  try {
    const [usuarios] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

    if (usuarios.length === 0) {
      return res.status(401).json({ erro: 'Usuário não encontrado' });
    }

    const usuario = usuarios[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    return res.status(200).json({
      mensagem: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }
    });
  } catch (err) {
    console.error('Erro no login:', err);
    return res.status(500).json({ erro: 'Erro interno no servidor' });
  }
};

module.exports = { register, login };
