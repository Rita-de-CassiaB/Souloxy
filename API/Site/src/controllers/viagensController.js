var viagensModel = require("../models/viagensModel");

function buscarUltimasviagens(req, res) {
    console.log("Entrou no Controller");
    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} viagens`);

    viagensModel.buscarUltimasviagens(idUsuario, limite_linhas).then(function (resultado) {
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

function exibirCidadeUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`exibindo cidades`);

    viagensModel.exibirCidadeUsuario(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as cidades.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirSatisfacaoUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`exibindo cidades`);

    viagensModel.exibirSatisfacaoUsuario(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as durações das viagens.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    buscarUltimasviagens,
    buscarviagenssEmTempoReal,
    exibirCidadeUsuario,
    exibirSatisfacaoUsuario
}