CREATE DATABASE IF NOT EXISTS simuapp;
USE simuapp;

CREATE TABLE if not EXISTS usuarios(
id int AUTO_INCREMENT PRIMARY KEY,
nome varchar (255) not null unique,
sobrenome varchar (255) not null unique,
email VARCHAR(255) NOT NULL UNIQUE,
senha_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS arquivos_pdf (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  caminho TEXT,
  tipo ENUM('prova', 'gabarito') NOT NULL,
  texto_extraido LONGTEXT,
  json_extraido longtext,
  data_upload DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE if not exists questoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero INT,
    enunciado TEXT NOT NULL,
    alternativa_a TEXT,
	alternativa_b TEXT,
	alternativa_c TEXT,
	alternativa_d TEXT,
	alternativa_e TEXT,
    resposta VARCHAR(5) NOT NULL,
    categoria VARCHAR(100),
    ano INT
);

CREATE TABLE IF NOT EXISTS respostas_usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nome_prova VARCHAR(255),
    ano INT,
    respostas JSON,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);



select * from questoes

 





