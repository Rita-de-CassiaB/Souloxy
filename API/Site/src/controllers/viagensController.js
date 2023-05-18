var viagensModel = require("../models/viagensModel");

function buscarUltimasviagens(req, res) {
    console.log("Entrou no Controller");
    const limite_linhas = 7;

    var id = req.body.id;

    console.log(`Recuperando as ultimas ${limite_linhas} viagens`);

    viagensModel.buscarUltimasviagens(id, limite_linhas).then(function (resultado) {
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


// function buscarviagenssEmTempoReal(req, res) {

//     var idViagem = req.params.idViagem;

//     console.log(`Recuperando viagens em tempo real`);

//     viagensModel.buscarviagenssEmTempoReal(idViagem).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas viagens.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

function exibirCidadeUsuario(req, res) {
    var id = req.params.id;

    console.log(`exibindo cidades`);

    viagensModel.exibirCidadeUsuario(id)
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

function exibirDuracaoUsuario(req, res) {
    var id = req.params.id;

    console.log(`exibindo cidades`);

    viagensModel.exibirDuracaoUsuario(id)
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
    exibirCidadeUsuario,
    exibirDuracaoUsuario
}