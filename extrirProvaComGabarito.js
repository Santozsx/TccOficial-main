import db from './api/db.js';
import fs from 'fs';

// Função para limpar texto
function limparTexto(texto) {
  return texto
    .replace(/ENEM2024/g, '')
    .replace(/[\*\d]+[A-Z]+\.indb.*/g, '')
    .replace(/([A-Z]{4,}\s*){2,}/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// Extrai questões da prova
function extrairQuestoes(texto) {
  const regexQuestoes = /QUEST[ÃA]O\s*(\d{1,3})\s*([\s\S]*?)(?=\s*QUEST[ÃA]O\s*\d{1,3}|$)/gi;
  const questoes = [];
  let match;

  while ((match = regexQuestoes.exec(texto)) !== null) {
    const numero = parseInt(match[1]);
    const corpo = match[2].trim();

    const linhas = corpo.split(/\n+/).map(l => l.trim()).filter(l => l.length > 0);
    const alternativas = {};
    let enunciadoLinhas = [];
    let altLabels = ['a', 'b', 'c', 'd', 'e'];
    let altIndex = 0;

    for (let linha of linhas) {
      const altMatch = linha.match(/^[A-Ea-e]?[)\.\-:\s]*\s*(.+)/);
      if (altIndex < 5 && altMatch && linha.length > 10) {
        alternativas[altLabels[altIndex]] = altMatch[1].trim();
        altIndex++;
      } else {
        enunciadoLinhas.push(linha);
      }
    }

    if (Object.keys(alternativas).length === 5) {
      questoes.push({
        numero,
        enunciado: enunciadoLinhas.join(' '),
        alternativas,
        correta: null
      });
    }
  }

  return questoes;
}

// Extrai gabarito do texto
function extrairGabarito(texto) {
  const linhas = texto.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const gabarito = {};

  for (let linha of linhas) {
    const match = linha.match(/(\d+)[\s\.:]*([ABCDE])/i);
    if (match) {
      const numero = parseInt(match[1]);
      const letra = match[2].toLowerCase();
      gabarito[numero] = letra;
    }
  }

  return gabarito;
}

async function main() {
  const [provas] = await db.execute("SELECT id, texto_extraido FROM arquivos_pdf WHERE tipo = 'prova' AND texto_extraido IS NOT NULL LIMIT 1");
  const [gabaritos] = await db.execute("SELECT id, texto_extraido FROM arquivos_pdf WHERE tipo = 'gabarito' AND texto_extraido IS NOT NULL LIMIT 1");

  if (provas.length === 0 || gabaritos.length === 0) {
    console.log("Prova ou gabarito não encontrados.");
    return;
  }

  const textoProva = limparTexto(provas[0].texto_extraido);
  const textoGabarito = limparTexto(gabaritos[0].texto_extraido);

  const questoes = extrairQuestoes(textoProva);
  const gabarito = extrairGabarito(textoGabarito);

  // Insere a letra correta em cada questão
  for (let questao of questoes) {
    questao.correta = gabarito[questao.numero] || null;
  }

  const arquivoFinal = `questoes_com_gabarito_${provas[0].id}.json`;
  fs.writeFileSync(arquivoFinal, JSON.stringify(questoes, null, 2), 'utf8');
  console.log(`Arquivo salvo: ${arquivoFinal}`);
}

main();
