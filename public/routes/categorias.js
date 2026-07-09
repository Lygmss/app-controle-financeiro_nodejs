const express = require('express'); //importando o pacote express
//const os = require('os');
const path = require('path'); //importando o pacote path do Node.js para trabalhar com caminhos de arquivos
const router = express.Router(); //criando uma instância do router do express

//onde vai ficar as configurações do express
router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "..", "categorias.html"));
});
//definindo a rota para cadastrar categoria
router.get("/cadastrar-categoria",(req,res) => {
    res.sendFile(path.join(__dirname, "..", "cadastrar-categoria.html"));
});
//definindo a rota para editar categoria
router.get("/editar-categoria",(req,res) => {
    res.sendFile(path.join(__dirname, "..", "editar-categoria.html"));
});
//definindo a rota para deletar categoria
router.get("/deletar-categoria",(req,res) => {
    res.sendFile(path.join(__dirname, "..", "deletar-categoria.html"));
});

module.exports = router; //exportando o router para ser usado em outros arquivos