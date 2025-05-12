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
  data_upload DATETIME DEFAULT CURRENT_TIMESTAMP
);

select * from arquivos_pdf



