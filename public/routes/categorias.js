const express = require('express'); //importando o pacote express
//const os = require('os');

const router = express.Router(); //criando uma instância do router do express
const connection = require("../database/connection");

//onde vai ficar as configurações do express
router.get("/", (req, res) => {
    //res.sendFile(path.join(__dirname, "..", "categorias"));
    connection.query(
        "SELECT * FROM tb_categorias",
        (erro, resultado) => {
            if (erro) {
                console.log("Erro ao consultar categorias");
            }
            else {
                res.render("categorias", { resultados: resultado });
            }
        }
    )
});
//definindo a rota para deletar categoria
router.get("/deletar/:id",(req,res) => {
    const {id} = req.params;

    connection.query(
        "DELETE FROM tb_categorias WHERE id = ?",
        [id],
        (erro) => {
            if(erro){
                console.log("Erro");
            }
            else{
                res.redirect("/categorias");
            }
        }
    )
});


//definindo a rota para cadastrar categoria
router.get("/cadastrar", (req, res) => {
    //res.sendFile(path.join(__dirname, "..", "cadastrar-categoria.html"));

    res.render('cadastrar-categoria');
});

router.post("/cadastrar", (req, res) => {
    //interação com o banco de dados
    const { nome } = req.body;

    connection.query(
        "INSERT INTO tb_categorias(nome, ativo) VALUES (?, ?)",
        [nome, 1],
        (erro) => {
            if (erro) {
                console.log("Erro ao cadastrar");
            }
            else {
                res.redirect("/categorias/");
            }
        }
    )


});


module.exports = router; //exportando o router para ser usado em outros arquivos



//definindo a rota para editar categoria
//router.get("/editar-categoria",(req,res) => {
//    res.sendFile(path.join(__dirname, "..", "editar-categoria.html"));
//});
