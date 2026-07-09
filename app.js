//importando o pacote express
const express = require('express');
//const os = require('os');
const path = require('path');

//onde vai ficar as configurações do express
const app = express();
app.use(express.static("public")); //definindo a pasta public como estática

//definindo a porta do servidor
const PORTA = 3000;

const routesCategorias = require('./public/routes/categorias'); //importando as rotas definidas no arquivo categorias.js
app.use('/categorias', routesCategorias); //usando as rotas definidas no arquivo categorias.js

const routesUsuarios = require('./public/routes/usuarios'); //importando as rotas definidas no arquivo usuarios.js
app.use('/usuarios', routesUsuarios);

const routesMovimentacao = require('./public/routes/movimentacao'); //importando as rotas definidas no arquivo movimentacao.js
const { addAbortListener } = require('events');
app.use('/movimentacao', routesMovimentacao);

//definindo a rota principal
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html")); //enviando o arquivo index.html como resposta para o cliente
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

//definindo a rota para a página de login
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/processar-login", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "tela-inicial.html"));
});
//definindo a rota para a página de cadastro

app.get("/tela-inicial", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "tela-inicial.html"));
});


//iniciando o servidor
app.listen(PORTA, () => {
    console.log(`Servidor iniciado`);
});


