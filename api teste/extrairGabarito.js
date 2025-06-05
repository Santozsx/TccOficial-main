const mysql = require('mysql2/promise');
const fs = require('fs');

async function conectarBanco() {
  return await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simuapp',
  });
}

function parseGabarito(texto) {
  const result = {
    linguagens: { ingles: [], espanhol: [] },
    humanas: []
  };

  // Extrai todas as linhas que podem conter gabaritos
  const linhas = texto.split('\n')
    .map(linha => linha.trim())
    .filter(linha => linha.length > 0);

  // Processa cada linha procurando padrões de gabarito
  linhas.forEach(linha => {
    // Padrão 1: "46C" ou "46 C"
    let match = linha.match(/^(\d{1,2})\s*([A-E])$/i);
    if (match) {
      const numero = parseInt(match[1]);
      const resposta = match[2].toUpperCase();
      
      if (numero <= 45) {
        result.linguagens.ingles.push({ numero, resposta });
        result.linguagens.espanhol.push({ numero, resposta });
      } else {
        result.humanas.push({ numero, resposta });
      }
      return;
    }

    // Padrão 2: "46 | C" ou "46 C E"
    match = linha.match(/^(\d{1,2})\s*[\|]?\s*([A-E])(?:\s*[\|]?\s*([A-E]))?$/i);
    if (match) {
      const numero = parseInt(match[1]);
      const resp1 = match[2].toUpperCase();
      const resp2 = match[3]?.toUpperCase();
      
      if (resp2) {
        result.linguagens.ingles.push({ numero, resposta: resp1 });
        result.linguagens.espanhol.push({ numero, resposta: resp2 });
      } else if (numero <= 45) {
        result.linguagens.ingles.push({ numero, resposta: resp1 });
      } else {
        result.humanas.push({ numero, resposta: resp1 });
      }
    }
  });

  return result;
}

async function main() {
  const db = await conectarBanco();

  try {
    const [arquivos] = await db.execute(
      "SELECT id, texto_extraido FROM arquivos_pdf WHERE texto_extraido IS NOT NULL"
    );

    for (const arquivo of arquivos) {
      const { id, texto_extraido } = arquivo;
      console.log(`\nProcessando arquivo ID ${id}...`);

      // Debug: mostra o conteúdo real
      const linhasDebug = texto_extraido.split('\n')
        .filter(linha => linha.trim().length > 0)
        .slice(0, 20);
      console.log("Conteúdo real do arquivo:");
      console.log(linhasDebug.join('\n'));

      const gabarito = parseGabarito(texto_extraido);
      const totalQuestoes = gabarito.linguagens.ingles.length + gabarito.humanas.length;

      if (totalQuestoes === 0) {
        console.log("AVISO: Nenhum gabarito encontrado no formato esperado.");
        console.log("Os formatos aceitos são:");
        console.log("- 46C");
        console.log("- 46 C");
        console.log("- 46 | C");
        console.log("- 46 C E (para Inglês/Espanhol)");
        continue;
      }

      const nomeArquivo = `gabarito_${id}.json`;
      fs.writeFileSync(nomeArquivo, JSON.stringify(gabarito, null, 2));
      console.log(`Sucesso! ${totalQuestoes} questões extraídas.`);
      console.log(`Verifique o arquivo: ${nomeArquivo}`);
    }
  } catch (error) {
    console.error("Erro:", error);
  } finally {
    await db.end();
  }
}

main();