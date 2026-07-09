const express = require('express');
//const os = require('os');
const path = require('path');
const router = express.Router();


router.get("/usuarios",(req,res) => {
    res.sendFile(path.join(__dirname, "..", "usuarios.html"));
});

module.exports = router;