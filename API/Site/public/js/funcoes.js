// sessão
function validarSessao() {
    aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_email = document.getElementById("b_email");
    var b_id = document.getElementById("b_id");

    if (email != null && nome != null && senha != null && id != null) {
        b_usuario.innerHTML = nome;
        b_email.innerHTML = none;
        b_id.innerHTML = none;

        finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "../login.html";
}

 //carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


