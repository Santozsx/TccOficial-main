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

// Remove lixo como 'ENEM2024', metadados e strings com muitos caracteres repetidos
const limparTexto = (texto) => {
    return texto
      .replace(/ENEM2024/g, '')
      .replace(/[\*\d]+[A-Z]+\.indb.*/g, '') // Remove tipo 010175AZ.indb...
      .replace(/([A-Z]{4,}\s*){2,}/g, '')    // Remove repetições de siglas em caixa alta
      .replace(/\s{2,}/g, ' ')               // Remove espaços duplicados
      .trim();

      return limparTexto;
  };
  
  
  

function extrairQuestoes(texto) {
    const regexQuestoes = /QUEST[ÃA]O\s*(\d{1,3})\s*([\s\S]*?)(?=\s*QUEST[ÃA]O\s*\d{1,3}|$)/gi;
    const questoes = [];
    let match;
  
    while ((match = regexQuestoes.exec(texto)) !== null) {
      const numero = parseInt(match[1]);
      const corpo = match[2].trim();
  
      // Divide por linhas limpas
      const linhas = corpo.split(/\n+/).map(l => l.trim()).filter(l => l.length > 0);
  
      const alternativas = {};
      let enunciadoLinhas = [];
      let altLabels = ['a', 'b', 'c', 'd', 'e'];
      let altIndex = 0;
  
      for (let linha of linhas) {
        const altMatch = linha.match(/^[A-Ea-e]?[)\.\-:\s]*\s*(.+)/);  // tenta detectar alternativas
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
  
  
async function main() {
  const db = await conectarBanco();

  const [arquivos] = await db.execute("SELECT id, texto_extraido FROM arquivos_pdf WHERE texto_extraido IS NOT NULL");

  for (const arquivo of arquivos) {
    const { id, texto_extraido } = arquivo;

    console.log(`\n=== Arquivo ID ${id} ===`);
    console.log("\n--- Texto bruto extraído (preview) ---\n");
    console.log(texto_extraido.slice(0, 3000));

    const questoes = extrairQuestoes(texto_extraido);
    console.log(`\n→ ${questoes.length} questões encontradas`);

    const nomeArquivo = `preview_questoes_${id}.json`;
    fs.writeFileSync(nomeArquivo, JSON.stringify(questoes, null, 2), 'utf8');
    console.log(`Salvo → ${nomeArquivo}`);
  }

  console.log("\nProcesso concluído.");
}

main();
