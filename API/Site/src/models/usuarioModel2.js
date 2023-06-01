var database = require("../database/config")


function cadastrarviagem(idviagem, data, duracao, cidade, local, atividades, satisfacao, comentarios, fkusuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarviagem():", idviagem, data, duracao, cidade, local, atividades, satisfacao, comentarios, fkusuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO viagens (idviagem, data, duracao, cidade, local, atividades, satisfacao, comentarios, fkusuario) VALUES ( '${idviagem}', '${data}', '${duracao}', '${cidade}', '${local}', ${atividades}, '${satisfacao}', '${comentarios}', '${fkusuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function planejarViagem(fkLocal, fkusuario2, data, duracao, comentarios) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function planejarViagem():", fkLocal, fkusuario2, data, duracao, comentarios, );

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO viagensDesejadas (fkLocal, fkusuario2, data, duracao, comentarios) VALUES ( '${fkLocal}', '${fkusuario2}', '${data}', '${duracao}', '${comentarios}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarviagem,
    planejarViagem,

};