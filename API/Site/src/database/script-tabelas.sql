-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE Souloxy;

USE Souloxy;

CREATE TABLE usuario (
	nome VARCHAR(50),
	sobrenome VARCHAR(50),
    id CHAR(4) PRIMARY KEY,
	cep CHAR(8),
	email VARCHAR(50),
	senha VARCHAR(20)
);


CREATE TABLE viagens (
	idviagem INT ,
	data DATE,
	duracao VARCHAR(150),
	cidade VARCHAR(50),
	local VARCHAR(15),
	atividades CHAR(1),
	satisfacao CHAR(1),
	comentarios VARCHAR(200),
	fkusuario CHAR(4),
	CONSTRAINT fkusuario FOREIGN KEY  (fkusuario) REFERENCES usuario(id),
	CONSTRAINT pkComposta PRIMARY KEY (idviagem, fkusuario )
    );
      
    CREATE TABLE Local (
    idlocal int primary key,
    nome varchar (45),
    CEP Char(8)
    );
    
	CREATE TABLE viagensDesejadas (
    fkLocal INT, 
	CONSTRAINT fkLocal FOREIGN KEY  (fkLocal) REFERENCES Local(idlocal),
    fkUsuario2 CHAR(4),
	CONSTRAINT fkUsuario2 FOREIGN KEY  (fkUsuario2) REFERENCES usuario(id),
    data DATE, 
    duracao VARCHAR(10),
    comentarios VARCHAR(200));
    

/*
comando para sql server - banco remoto - ambiente de produção
*/

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
