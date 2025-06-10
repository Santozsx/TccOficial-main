// routes/questoes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Buscar questões de um ano específico
router.get('/:ano', async (req, res) => {
  const { ano } = req.params;
  try {
    const [rows] = await db.query(
      'SELECT id, numero, enunciado, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e FROM questoes WHERE ano = ?',
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
      ]
    }));

    res.json(questoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar questões' });
  }
});

module.exports = router;
