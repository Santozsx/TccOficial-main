
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const cors = require('cors')


app.use(cors()); // <-- ATIVA O CORS (pode personalizar se quiser)
app.use(express.json()); //permite ler  JSON do corpo de  requisições
app.use('/auth', authRoutes); //usa Rotas de autenticação

const port = 8080;
app.listen(port, () => {
    console.log("Servidor rodando na porta ${port}");
});

//express.json() permite que o servidor entenda os dados enviados no corpo das requisições.

//As rotas de autenticação são carregadas com o prefixo /auth.



//Criação das pastas
/*const criaPasta = (dir) => {
    if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

criaPasta('./uploads/provas');
criaPasta('./uploads/gabarito');

//Configuração do armazenamento com multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const tipo = req.body.tipo; //'prova' ou 'gabarito'
        const dir = tipo === 'gabarito' ? 'uploads/gabarito' : 'uploads/provas';
        cb(null, dir)
    },
    filename:(req, file, cb) => {
        const nomeFinal = Date.now() + '_' + file.originalname;
        cb(null, nomeFinal);
    }
})

const upload = multer({storage});

app.const ('/upload', upload.single('arquivo'), async (req, res) =>{
    const tipo = req.body.tipo; //'prova' ou 'gabarito'
    const name = req.file.originalname;
    const caminho = req.file.path;

    try{
        await db.execute(
            'INSERT INTO arquivos_pdf(nome, caminho, tipo) VALUES (?, ?, ?)',
            [name, caminho, tipo]
        );
        res.json({ mensagem})
    }

})*/
