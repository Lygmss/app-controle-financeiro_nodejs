//importando o pacote express
const express = require('express');
//const os = require('os');
const path = require('path');

//onde vai ficar as configurações do express
const app = express();
app.use(express.static("public")); //definindo a pasta public como estática

//definindo a porta do servidor
const PORTA = 3000;


//definindo a rota principal
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/", (req,res) => {
    //path.join() é usado para criar um caminho absoluto para o arquivo index.html
    //__dirname é uma variável global do Node.js que retorna o diretório atual do arquivo em execução
    //res.sendFile() é um método do Express que envia um arquivo como resposta para o cliente
    //public é a pasta onde estão os arquivos estáticos do projeto, como HTML, CSS e JS
    //index.html é o arquivo que será enviado como resposta para o cliente
    //o método sendFile() envia o arquivo index.html como resposta para o cliente
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/categorias",(req,res) => {
    res.sendFile(path.join(__dirname, "public", "categorias.html"));
});
app.get("/usuarios",(req,res) => {
    res.sendFile(path.join(__dirname, "public", "usuarios.html"));
});
    app.get("/movimentacao",(req,res) => {
        res.sendFile(path.join(__dirname, "public", "movimentacao.html"));
    });
    app.get("/cadastro",(req,res) => {
        res.sendFile(path.join(__dirname, "public", "cadastro.html"));
    }); 

//iniciando o servidor
app.listen(PORTA, () => {
    console.log(`Servidor iniciado`);
});


