var database = require("../database/config");

function buscarUltimasviagens(idUsuario, limite_linhas) {
    var idUsuario = req.params.idUsuario;


    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select     
		nome as 'nome do usuário',
        cidade as 'cidade viajada',
        duracao as 'duração em dias',
        satisfacao as 'satisfação',
        fkusuario as 'identificação',
		data
                    from viagens
                    join usuario
                    on fkusuario = id
                    where fkusuario = ${idUsuario}
                   order by nome desc by ${limite_linhas};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select          
        duracao as duracao,
		data as momento_grafico
                    from viagens
                    join usuario
                    on fkusuario = id
                    where fkusuario = ${idUsuario}
                   order by nome desc`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

 function buscarviagenssEmTempoReal(idUsuario) {

     instrucaoSql = ''

     if (process.env.AMBIENTE_PROCESSO == "producao") {
   instrucaoSql = `select     
		nome as 'nome do usuário',
        cidade as 'cidade viajada',
        duracao as 'duração em dias',
        satisfacao as 'satisfação',
        fkusuario as 'identificação',
		data
                    from viagens
                    join usuario
                    on fkusuario = id
                    where fkusuario = ${idUsuario}
                   order by nome desc by desc;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
         instrucaoSql = `select          
        duracao as duracao,
		data as momento_grafico
                    from viagens
                    join usuario
                    on fkusuario = id
                    where fkusuario = ${idUsuario}
                   order by nome desc`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirCidadeUsuario(idUsuario) {

    var idUsuario = req.params.idUsuario;

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `        SELECT 
		cidade
		FROM usuario
			JOIN viagens ON id = ${idUsuario} where id = ${idUsuario} ORDER BY id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `    SELECT 
		cidade as Duração
		FROM usuario
			JOIN viagens ON id = ${idUsuario} where id = ${idUsuario} ORDER BY id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function exibirSatisfacaoUsuario(idUsuario) {

    var idUsuario = req.params.idUsuario;
    

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `     SELECT 
		satisfacao as Satisfação,
        nome
		FROM usuario
			JOIN viagens ON id = ${idUsuario} ORDER BY ${idUsuario} desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `     SELECT 
		satisfacao as Satisfação,
        nome
		FROM usuario
			JOIN viagens ON id = ${idUsuario} ORDER BY ${idUsuario} desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasviagens,
    buscarviagenssEmTempoReal,
    exibirCidadeUsuario,
    exibirSatisfacaoUsuario
}
