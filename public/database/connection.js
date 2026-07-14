const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "",
    database: "db_financeiro"
    }
);

connection.connect((erro) => {
    if(erro) {
        console.log("Erro ao conectar com o banco")
    }
    else{
        console.log("Banco conectado")
    }

});

module.exports = connection;