var express = require("express");
var router = express.Router();

var viagensController = require("../controllers/viagensController");

router.get("/ultimas/:fkusuario", function (req, res) {
    viagensController.buscarUltimasviagens(req, res);
});

//router.get("/tempo-real/:fkusuario", function (req, res) {
//    viagensController.buscarViagensEmTempoReal(req, res);
//})

module.exports = router;