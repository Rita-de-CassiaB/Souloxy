var viagensModel = require("../models/viagensModel");

function buscarUltimasviagens(req, res) {


    var fk = req.params.fkusuario;

    console.log(`Recuperando as ultimas viagens`);

    viagensModel.buscarUltimasviagenss(fkusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas viagens.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


/* function buscarviagenssEmTempoReal(req, res) {

   var fkusuario = req.params.fkusuario;

 console.log(`Recuperando viagens em tempo real`);

 viagensModel.buscarviagenssEmTempoReal(fkusuario).then(function (resultado) {
        if (resultado.length > 0) {
res.status(200).json(resultado);
      } else {
    res.status(204).send("Nenhum resultado encontrado!")
}
    }).catch (function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as ultimas viagens.", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
});
}*/

module.exports = {
    buscarUltimasviagens,
 //   buscarviagensEmTempoReal

}