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
    
    CREATE TABLE Locais (
    idlocal int primary key,
    nome varchar (45),
    CEP Char(8)
    );
    
    INSERT INTO Locais VALUES 
    (1, 'São Roque', 18130200),
    (2, 'Brotas',  17380000),
    (3, 'Peruíbe', 11750000),
    (4, 'Santo Antonio do Pinhal', 12450000),
    (5, 'Eldorado', 11960970),
    (6, 'Serra Negra', 13930970),
    (7, 'Cunha', 19275970),
    (8, 'Itu', 13300169),
	(9, 'Campos do Jordão', 12460000),
    (10, 'Araçoiaba da Serra', 18190000),
    (11, 'Ubatuba', 11680000),
	(12, 'Atibaia', 12940100),
    (13, 'São Bento do Sapucaí', 12490000),
    (14, 'Águas de Prata', 13890-000),
    (15, 'Socorro', 13960000);
    
    
    -- Todos os usuários e suas viagens
    SELECT * FROM usuario
		JOIN viagens ON id = fkusuario;
        

    
    
  -- Exibindo Viagem de acordo com o id do usuário
select     
		nome as 'nome do usuário',
        cidade as 'cidade viajada',
        duracao as 'duração em dias',
        satisfacao as 'satisfação',
        fkusuario as 'identificação',
		data
                    from viagens
                    join usuario
                    on fkusuario = id
                    where fkusuario = 5656
                   order by nome desc;
                   
                   
                   
                   
                   
-- Exibindo cidade de acordo com o id do usuário
    SELECT 
		cidade,
        nome
		FROM usuario
			JOIN viagens ON id = 5656 where id = 5656 ORDER BY id desc;
   
   -- Exibindo Duração de acordo com o id do usuário
    SELECT 
		duracao as Duração,
        nome
		FROM usuario
			JOIN viagens ON id = fkusuario ORDER BY id desc;
	
    -- Exibindo satisfação de acordo com o id do usuário
     SELECT 
		satisfacao as Satisfação,
        nome
		FROM usuario
			JOIN viagens ON id = fkusuario ORDER BY id desc;           
            
	-- Exibindo Data de acordo com o id do usuário
     SELECT 
		data as Data,
        nome
		FROM usuario
			JOIN viagens ON id = fkusuario ORDER BY id desc; 
            
    
    SELECT * FROM Locais;
	SELECT * FROM usuario;
	SELECT * FROM viagens;
    desc viagens;
    
    DROP DATABASE Souloxy;