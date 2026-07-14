//importando o pacote express
const express = require('express');
//const os = require('os');
const path = require('path');

//onde vai ficar as configurações do express
const app = express();
app.use(express.static("public")); //definindo a pasta public como estática

//instalação do ejs pra banco de dados no terminal 'npm install ejs'
app.set('view engine', 'ejs'); //configurar que a aplicação vai usar EJS
app.set('views', path.join(__dirname, 'public', 'views')); //sinalizar pro app.js que o views esta na pasta public e não no caminho atual

app.use(express.urlencoded({extended:true}));

//definindo a porta do servidor
const PORTA = 3000;

const routesCategorias = require('./public/routes/categorias'); //importando as rotas definidas no arquivo categorias.js
app.use('/categorias', routesCategorias); //usando as rotas definidas no arquivo categorias.js

const routesUsuarios = require('./public/routes/usuarios'); //importando as rotas definidas no arquivo usuarios.js
app.use('/usuarios', routesUsuarios);

const routesMovimentacao = require('./public/routes/movimentacao'); //importando as rotas definidas no arquivo movimentacao.js
const { addAbortListener } = require('events'); //require "importa" arquivo
app.use('/movimentacao', routesMovimentacao);
//definindo a rota para a página de cadastro


//definindo a rota principal

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
    //res.sendFile(path.join(__dirname, "public", "login.html"));
    res.render('login');
});
app.get("/processar-login", (req,res) => {
    //res.sendFile(path.join(__dirname, "public", "tela-inicial"));
    const {email, senha} = req.query; // pegar informações via get 

    res.render('tela-inicial', {email}); //renderizar tela, passando as informações pra ela
});


//definindo a rota para a página de cadastro

//path.join() é usado para criar um caminho absoluto para o arquivo tela-inicial.html
//__dirname é uma variável global do Node.js que retorna o diretório atual do arquivo em execução
//res.sendFile() é um método do Express que envia um arquivo como resposta para o cliente
//public é a pasta onde estão os arquivos estáticos do projeto, como HTML, CSS e JS
//tela-inicial.html é o arquivo que será enviado como resposta para o cliente
//o método sendFile() envia o arquivo tela-inicial.html como resposta para o cliente


//iniciando o servidor
app.listen(PORTA, () => {
    console.log(`Servidor iniciado`);
});
//o método listen() inicia o servidor na porta definida na constante PORTA
//o console.log() exibe uma mensagem no console informando que o servidor foi iniciado


//para iniciar a sessão no terminal se digita "npm init -y"
//pra iniciar sessão depois é npm start 