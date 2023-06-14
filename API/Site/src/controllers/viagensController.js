var viagensModel = require("../models/viagensModel");

function buscarUltimasviagens(req, res) {


    console.log("Entrou no Controller");

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas viagens`);

    viagensModel.buscarUltimasviagens(idUsuario).then(function (resultado) {
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


function buscarviagenssEmTempoReal(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando viagens em tempo real`);

    viagensModel.buscarviagenssEmTempoReal(idUsuario).then(function (resultado) {
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

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    viagensModel.listar(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado  encontrado!")
            }

        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarp(req, res) {
    var idUsuario = req.params.idUsuario;

    viagensModel.listarp(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }

        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    buscarUltimasviagens,
    buscarviagenssEmTempoReal,
    listar,
    listarp
}