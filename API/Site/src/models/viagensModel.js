var database = require("../database/config");

function buscarUltimasviagens(id, limite_linhas) {
    var id = id;


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
                    where fkusuario = ${id}
                   order by nome desc by ${limite_linhas}`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select          
        cidade,
        duracao,
        satisfacao,
        fkusuario,
		data, 
        nome
                    from viagens
                    join usuario
                    on fkusuario = id
                    where fkusuario = ${id}
                   order by nome desc`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarviagenssEmTempoReal(id) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select          
//         cidade,
//         duracao,
//         satisfacao,
//         fkusuario,
// 		data, 
//         nome
//                     from viagens
//                     join usuario
//                     on fkusuario = id
//                     where fkusuario = ${id}
//                    order by nome desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select          
//         cidade,
//         duracao,
//         satisfacao,
//         fkusuario,
// 		data, 
//         nome
//                     from viagens
//                     join usuario
//                     on fkusuario = id
//                     where fkusuario = ${id}
//                    order by nome desc limit 1`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function exibirCidadeUsuario(id) {

    var id = req.params.id;

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `        SELECT 
		cidade
		FROM usuario
			JOIN viagens ON id = ${id} where id = ${id} ORDER BY id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `    SELECT 
		cidade as Duração
		FROM usuario
			JOIN viagens ON id = ${id} where id = ${id} ORDER BY id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function exibirDuracaoUsuario(id) {

    var id = req.params.id;

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `    SELECT 
		duracao as Duração,
		FROM usuario
			JOIN viagens ON id = ${id} where id = ${id} ORDER BY id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `    SELECT 
		duracao as Duração,
		FROM usuario
			JOIN viagens ON id = ${id} where id = ${id} ORDER BY id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasviagens,
    exibirCidadeUsuario,
    exibirDuracaoUsuario
}
