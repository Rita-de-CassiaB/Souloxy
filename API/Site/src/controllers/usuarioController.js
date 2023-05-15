var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
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

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var id = req.body.idServer;
    var cep = req.body.cepServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu número de identificação está undefined!");
    }else if (cep == undefined) {
            res.status(400).send("Seu cep está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, id, cep, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
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
    }  else if (duracao == undefined){
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
    } else{ 
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarviagem(idviagem, data, duracao, cidade, local, atividades, satisfacao, comentarios, fkusuario)
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


module.exports = {
    entrar,
    cadastrar,
    cadastrarviagem,
    listar,
    testar
}