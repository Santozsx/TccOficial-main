const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");  // Para processar o PDF

// Configuração do banco de dados
const pool = mysql.createPool({
  host: "localhost",  // Substitua pelo seu host
  user: "root",       // Substitua pelo seu usuário
  password: "",       // Substitua pela sua senha
  database: "simuapp",
});

// Função para processar o arquivo PDF
async function processarPDF(id, caminho) {
  try {
    const buffer = fs.readFileSync(caminho);  // Lê o arquivo PDF em buffer
    const data = await pdfParse(buffer);      // Extrai o texto do PDF

    const textoExtraido = data.text;  // Todo o texto extraído

    // Exibe no console apenas o comprimento do texto extraído (sem limite)
    console.log(`Texto extraído de ${caminho}: ${textoExtraido.length} caracteres`);

    // Atualiza a tabela com o texto extraído
    await pool.promise().query(
      "UPDATE arquivos_pdf SET texto_extraido = ? WHERE id = ?",
      [textoExtraido, id]
    );

    console.log(`Texto extraído de ${caminho} inserido com sucesso no banco de dados.`);
  } catch (err) {
    console.error("Erro ao processar PDF:", err.message);
  }
}

// Função principal para processar os arquivos
async function main() {
  try {
    // Consulta para pegar o próximo PDF sem texto extraído
    const [rows] = await pool.promise().query(
      "SELECT id, caminho FROM arquivos_pdf WHERE texto_extraido IS NULL AND tipo = 'prova' LIMIT 1"
    );

    if (rows.length > 0) {
      const { id, caminho } = rows[0];
      console.log(`Processando o arquivo PDF: ${caminho}`);
      await processarPDF(id, caminho);
    } else {
      console.log("Nenhum arquivo PDF pendente para processamento.");
    }
  } catch (err) {
    console.error("Erro ao buscar arquivo no banco de dados:", err.message);
  }
}

// Chama a função principal
main();
