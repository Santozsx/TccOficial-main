const mysql = require("mysql2");
const fs = require("fs");
const pdfParse = require("pdf-parse");

// Configuração do banco de dados
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "simuapp",
});

// Função para processar o arquivo PDF e atualizar o banco
async function processarPDF(id, caminho, tipo) {
  try {
    const buffer = fs.readFileSync(caminho);
    const data = await pdfParse(buffer);
    const textoExtraido = data.text;

    console.log(`✅ [${tipo}] Texto extraído de ${caminho}: ${textoExtraido.length} caracteres`);

    await pool.promise().query(
      "UPDATE arquivos_pdf SET texto_extraido = ? WHERE id = ?",
      [textoExtraido, id]
    );

    console.log(`📝 [${tipo}] Texto salvo no banco com sucesso!`);
  } catch (err) {
    console.error(`❌ Erro ao processar PDF (${caminho}):`, err.message);
  }
}

// Função principal para processar todos os PDFs pendentes
async function main() {
  try {
    const [rows] = await pool.promise().query(
      "SELECT id, caminho, tipo FROM arquivos_pdf WHERE texto_extraido IS NULL AND tipo IN ('prova', 'gabarito')"
    );

    if (rows.length === 0) {
      console.log("✅ Nenhum arquivo PDF pendente para processamento.");
      return;
    }

    for (const arquivo of rows) {
      const { id, caminho, tipo } = arquivo;
      console.log(`\n📂 Processando arquivo ID ${id} (${tipo}): ${caminho}`);
      await processarPDF(id, caminho, tipo);
    }

    console.log("\n🚀 Todos os arquivos foram processados com sucesso.");
  } catch (err) {
    console.error("❌ Erro ao buscar arquivos no banco de dados:", err.message);
  }
}

main();
