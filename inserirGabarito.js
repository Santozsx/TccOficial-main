const fs = require('fs');
const pdf = require('pdf-parse');

// Caminhos dos arquivos
const caminhoPdfGabarito = 'gabarito.pdf';
const caminhoQuestoesJson = 'questoes.json';
const caminhoSaida = 'questoes_com_gabarito.json';

// Função para extrair gabarito do PDF
async function extrairGabaritoDoPdf(caminho) {
  const buffer = fs.readFileSync(caminho);
  const data = await pdf(buffer);
  const linhas = data.text.split('\n');

  const gabarito = {};

  for (let linha of linhas) {
    const match = linha.match(/(\d+)\s*[-–]\s*([A-Ea-e])/); // Ex: 12 - B
    if (match) {
      const numero = parseInt(match[1]);
      const letra = match[2].toLowerCase();
      gabarito[numero] = letra;
    }
  }

  return gabarito;
}

// Função principal
async function inserirGabarito() {
  const questoes = JSON.parse(fs.readFileSync(caminhoQuestoesJson, 'utf8'));
  const gabarito = await extrairGabaritoDoPdf(caminhoPdfGabarito);

  const atualizadas = questoes.map(q => {
    const letra = gabarito[q.numero];
    if (letra && q.alternativas[letra]) {
      q.correta = letra;
    } else {
      console.warn(`❌ Gabarito não encontrado para questão ${q.numero}`);
    }
    return q;
  });

  fs.writeFileSync(caminhoSaida, JSON.stringify(atualizadas, null, 2), 'utf8');
  console.log(`✅ Questões atualizadas com gabarito salvas em ${caminhoSaida}`);
}

inserirGabarito().catch(err => console.error('Erro ao inserir gabarito:', err));
