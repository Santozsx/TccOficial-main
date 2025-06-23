const express = require('express');
const router = express.Router();
const db = require('../db');

// Buscar questões por ano com query ?ano=2024
router.get('/', async (req, res) => {
  const { ano } = req.query;

  if (!ano) {
    return res.status(400).json({ error: 'Ano é obrigatório como parâmetro na query (?ano=2024)' });
  }

  try {
    const [rows] = await db.query(
      'SELECT id, numero, enunciado, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, resposta FROM questoes WHERE ano = ?',
      [ano]
    );

    const questoes = rows.map(q => ({
      id: q.id,
      numero: q.numero,
      enunciado: q.enunciado,
      alternativas: [
        `A) ${q.alternativa_a}`,
        `B) ${q.alternativa_b}`,
        `C) ${q.alternativa_c}`,
        `D) ${q.alternativa_d}`,
        `E) ${q.alternativa_e}`
      ],
      resposta:q.resposta
    }));

    res.json(questoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar questões' });
  }
});

module.exports = router;
