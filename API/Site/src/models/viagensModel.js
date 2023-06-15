var database = require("../database/config");

function buscarUltimasviagens(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select    
		nome, 
        cidade, 
        duracao, 
        satisfacao,
		DATE_FORMAT(data,'%d/%m/%y') as data
                    from viagens
                    join usuario
                    on fkUsuario = id
                    where fkUsuario = ${idUsuario}`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select        
		nome, 
        cidade, 
        duracao, 
        satisfacao,
		DATE_FORMAT(data,'%d/%m/%y') as data
                    from viagens
                    join usuario
                    on fkUsuario = id
                    where fkUsuario = ${idUsuario}
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
		nome
        cidade 
        duracao 
        satisfacao

		data
                    from viagens
                    join usuario
                    on fkUsuario = id
                    where fkUsuario = ${idUsuario}
                   order by nome desc by desc;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
         instrucaoSql = `select 
 		nome 
        cidade 
        duracao 
        satisfacao
		data
                    from viagens
                    join usuario
                    on fkUsuario = id
                    where fkUsuario = ${idUsuario}
                   order by nome desc`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idUsuario) {

    console.log ("Acessei o viagens model - listar")


    var instrucao = `select          
    cidade, 
    DATE_FORMAT(data,'%d/%m/%y') as data
     from viagens   join usuario
                on fkusuario = id
                where fkusuario = ${idUsuario}
               order by nome desc limit 5;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarp(idUsuario) {

    console.log ("Acessei o viagens model - listar2")


    var instrucao = `Select fklocal, 
    DATE_FORMAT(data,'%d/%m/%y') as data
     from viagensDesejadas   join usuario
                on fkusuario2 = id
                where fkusuario2 = ${idUsuario}
               order by nome;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    buscarUltimasviagens,
    buscarviagenssEmTempoReal,
    listar,
    listarp
}
