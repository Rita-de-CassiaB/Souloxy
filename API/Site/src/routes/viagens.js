var express = require("express");
var router = express.Router();
var viagensController = require("../controllers/viagensController");

router.get("/Ultimasviagens/:idUsuario", function (req, res, next) {
    viagensController.buscarUltimasviagens(req, res);
});

router.post("/tempo-real/:idUsuario", function (req, res, next) {
    viagensController.buscarviagenssEmTempoReal(req, res);
});

router.get("/exibirCidadeUsuario/", function (req, res) {
    viagensController.exibirCidadeUsuario(req, res);
})
router.get("/exibirDuracaoUsuario/", function (req, res) {
    viagensController.exibirDuracaoUsuario(req, res);
})

router.get("/exibirSatisfacaoUsuario/", function (req, res) {
    viagensController.exibirSatisfacaoUsuario(req, res);
})



module.exports = router;