var database = require("../database/config");

function buscarUltimasviagens(fkusuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
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
                    where fkusuario = ${fkusuario}
                   order by nome desc;
                   `;
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
                    where fkusuario = ${fkusuario}
                   order by nome desc;
                   `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarviagenssEmTempoReal(fkusuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
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
                    where fkusuario = 5656
                   order by nome desc;
                   `;

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
                    where fkusuario = 5656
                   order by nome desc;
                   `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasviagens,
    buscarviagenssEmTempoReal
}
