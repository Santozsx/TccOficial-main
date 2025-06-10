const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');
const questoesRoutes = require('./routes/questoes');
const respostasRoutes = require('./routes/respostas');

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api/questoes', questoesRoutes);      // <-- Nova rota
app.use('/api/respostas', respostasRoutes);    // <-- Nova rota

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
