// routes/respostas.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Salvar respostas da prova
router.post('/', async (req, res) => {
  const { usuarioId, ano, nomeProva, respostas } = req.body;
  try {
    await db.query(
      'INSERT INTO respostas_usuario (usuario_id, ano, nome_prova, respostas) VALUES (?, ?, ?, ?)',
      [usuarioId, ano, nomeProva, JSON.stringify(respostas)]
    );
    res.json({ mensagem: 'Respostas salvas com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar respostas' });
  }
});

module.exports = router;
