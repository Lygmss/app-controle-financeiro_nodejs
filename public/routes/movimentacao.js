const express = require('express');
//const os = require('os');
//const path = require('path');
const router = express.Router();


router.get("/movimentacao",(req,res) => {
    //res.sendFile(path.join(__dirname, "..", "movimentacao.html"));
    res.render('movimentacao');
});

module.exports = router;
