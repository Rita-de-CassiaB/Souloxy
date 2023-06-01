var usuarioModel2 = require("../models/usuarioModel2");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController2");
    res.json("ESTAMOS FUNCIONANDO!");
}



function cadastrarviagem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastroviagens.html
    var idviagem = req.body.idviagemServer;
    var data = req.body.dataServer;
    var duracao = req.body.duracaoServer;
    var cidade = req.body.cidadeServer;
    var local = req.body.localServer;
    var atividades = req.body.atividadesServer;
    var satisfacao = req.body.satisfacaoServer;
    var comentarios = req.body.comentariosServer;
    var fkusuario = req.body.fkusuarioServer;

    // Faça as validações dos valores

    if (idviagem == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Sua data está undefined!");
    } else if (duracao == undefined) {
        res.status(400).send("Sua duração está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (local == undefined) {
        res.status(400).send("Seu local está undefined!");
    } else if (atividades == undefined) {
        res.status(400).send("Suas atividades estão undefined!");
    } else if (satisfacao == undefined) {
        res.status(400).send("Sua satisfação está undefined!");
    } else if (comentarios == undefined) {
        res.status(400).send("Seus comentários estão undefined!");
    } else if (fkusuario == undefined) {
        res.status(400).send("Seu numero de identificação está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel2.cadastrarviagem(idviagem, data, duracao, cidade, local, atividades, satisfacao, comentarios, fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de viagens! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function planejarViagem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo planejarViagem.html
    var fkLocal = req.body.fkLocalServer;
    var fkusuario2 = req.body.fkusuarioServer2;
    var data = req.body.dataServer;
    var duracao = req.body.duracaoServer;
    var comentarios = req.body.comentariosServer;


    // Faça as validações dos valores

    if (fkLocal == undefined) {
        res.status(400).send("Seu local está undefined!");
    } else if (fkusuario2 == undefined) {
        res.status(400).send("Seu numero de identificação está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Sua data está undefined!");
    } else if (duracao == undefined) {
        res.status(400).send("Sua duração está undefined!");
    } else if (comentarios == undefined) {
        res.status(400).send("Seus comentários estão undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel2.planejarViagem(fkLocal, fkusuario2, data, duracao, comentarios)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o planejamento de viagens! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {

    cadastrarviagem,
    planejarViagem,
    testar
}