var express = require("express");
var router = express.Router();
var viagensController = require("../controllers/viagensController");

router.get("/Ultimasviagens/:idUsuario", function (req, res, next) {
    viagensController.buscarUltimasviagens(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    viagensController.listar(req, res);
});

router.get("/listarp/:idUsuario", function (req, res) {
    viagensController.listarp(req, res);
});

router.post("/tempo-real/:idUsuario", function (req, res, next) {
    viagensController.buscarviagenssEmTempoReal(req, res);
});




module.exports = router;