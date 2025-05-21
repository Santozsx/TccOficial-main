CREATE DATABASE if not exists simuapp;
USE simuapp;

CREATE TABLE if not exists usuarios(
id int AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL UNIQUE,
sobrenome VARCHAR(255) NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE,
senha_hash VARCHAR(255) NOT NULL
);

create table if not exists arquivos_pdf(
id int auto_increment primary key,
nome VARCHAR (255),
caminho TEXT,
texto_extraido LONGTEXT,
data_upload DATETIME DEFAULT CURRENT_TIMESTAMP,
tipo ENUM('prova', 'gabarito')

);

insert into usuarios (id, nome, sobrenome, email, senha_hash) 
values (1,' gabriel', 'rodrigues', 'gabriel@gmail.com', 123456);

select * from arquivos_pdf;










prova
	id
	categoria
	ano
    
Questao
	id
	json (NVARCHAR MAX)
	alternativaCorreta
    idprova

Simulado
	id
	data
    prova
    respostasCorretas
     
    


	
API que vai buscar os dados do banco de dados precisa ser criada em c# e ela deve ter
1 - 
  
  
  