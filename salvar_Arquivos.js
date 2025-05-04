import fs from 'fs';
import path from 'path';
import db from './api/db.js';



const registrarArquivos = async (tipo) =>{
    const dir = tipo === 'prova' ? './api/uploads/provas' : './api/uploads/gabarito';

    const arquivos = fs.readdirSync(dir);
    for (const nome of arquivos) {
        const caminhoCompleto = path.join(dir, nome);
        const [existe] = await db.execute(
            'SELECT * FROM arquivos_pdf WHERE caminho = ?', [caminhoCompleto]
        )

        if (existe.length === 0){
            await db.execute('INSERT INTO arquivos_pdf (nome, caminho, tipo) VALUES (?,?,?)', [nome, caminhoCompleto, tipo]

            );
            console.log(`📄 Arquivo cadastrado: ${nome}`)
        }else {
            console.log(`🔁 Arquivo ja cadastrado: ${nome}`)
        }	
    }
};

//Rodar o script
await registrarArquivos('prova');
await registrarArquivos('gabarito');

process .exit();