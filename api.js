/**
 *  Api criada para alterar os arquivos de tradução .json
 */

import express from "express";
import bodyParser from "body-parser";
import config from "./config/global-config";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use('/',express.static('public'));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/**
 *  Busca ou verifica os arquivos JSON existentes
 */

// Verifica se possui algum arquivo upado
app.get("/api/hasfile", (req, res) => {
    res.json({ ok: true })
});

// Retorna a lista dos diretórios
app.get("/api/folders", (req, res) => {
    res.json({ ok: true })
});

// Retorna a lista dos diretórios
app.get("/api/folder/:fileName", (req, res) => {
    res.json({ ok: true })
});

// Retorna o JSON especificado
app.get("/api/json/:fileName", (req, res) => {
    res.json({ ok: true })
});


// Salva o arquivo compactado .zip ou gzip etc
app.post("/api/upload", (req, res) => {
    res.json({ ok: true })
});




app.listen(config.PORT, () => console.log(`Server Listen in port ${config.PORT}`));