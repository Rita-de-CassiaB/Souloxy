var express = require("express");
var router = express.Router();

var usuarioController2 = require("../controllers/usuarioController2");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/cadastrarviagem", function (req, res) {
    usuarioController2.cadastrarviagem(req, res);
})

router.post("/planejarViagem", function (req, res) {
    usuarioController2.planejarViagem(req, res);
})

module.exports = router;