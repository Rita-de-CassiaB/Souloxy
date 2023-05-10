CREATE DATABASE Souloxy;

USE Souloxy;

CREATE TABLE usuario (
	nome VARCHAR(50),
	sobrenome VARCHAR(50),
    id CHAR(4) PRIMARY KEY,
	cep CHAR(8),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE viagens (
	idviagem INT,
	data DATE,
	duracao VARCHAR(150),
	cidade VARCHAR(50),
	local VARCHAR(15),
	atividades CHAR(1),
	satisfacao CHAR(1),
	comentarios VARCHAR(200),
	fkusuario CHAR(4),
	CONSTRAINT fkusuario FOREIGN KEY  (fkusuario) REFERENCES usuario(id),
	CONSTRAINT pkComposta PRIMARY KEY (fkusuario, idviagem)
    );
    
    SELECT * FROM usuario
		JOIN viagens ON id = fkusuario;
        SELECT * FROM usuario;
		SELECT * FROM viagens;
    DROP DATABASE Souloxy;