-- Criar banco de dados e tabelas

CREATE DATABASE exercicio_modelagem_db_sql;

CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE produtos (
	id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  preco INTEGER NOT NULL,
  quantidade_em_estoque INTEGER NOT NULL,
  categoria_id INTEGER REFERENCES categorias(id)
);

CREATE TABLE clientes (
  cpf CHAR(11) NOT NULL UNIQUE,
  NOME VARCHAR(150) NOT NULL
);

CREATE TABLE vendedores (
  cpf CHAR(11) NOT NULL UNIQUE,
  NOME VARCHAR(150) NOT NULL
);


CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  valor INTEGER NOT NULL,
  cliente_cpf CHAR(11) REFERENCES clientes(cpf),
  vendedor_cpf CHAR(11) REFERENCES vendedores(cpf)
);

CREATE TABLE itens_do_pedido (
  id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES pedidos(id),
  quantidade INTEGER NOT NULL,
  produto_id INTEGER REFERENCES produtos(id)
);

-- 1 - Alimentar a tabela `categorias`

INSERT INTO categorias
(nome)
VALUES
('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');

-- 2 - Alimentar a tabela `produtos`

INSERT INTO produtos
(nome, preco, quantidade_em_estoque, descricao, categoria_id)
VALUES
('Mamão', 300, 123, 'Rico em vitamina A, potássio e vitamina C.', 1),
('Maçã', 90, 34, 'Fonte de potássio e fibras.', 1),
('Cebola', 50, 76, 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 2),
('Abacate', 150, 64, 'NÃO CONTÉM GLÚTEN.', 1),
('Tomate', 125, 88, 'Rico em vitaminas A, B e C.', 2),
('Acelga', 235, 13, 'NÃO CONTÉM GlÚTEN.', 2),
('Macarrão Parafuso', 690, 5, 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais.', 3),
('Massa para lasanha', 875, 19, 'Uma reunião em família precisa ter comida boa e muita alegria', 3),
('Refrigerante coca cola lata', 350, 189, 'Sabor orginal', 4),
('Refrigerante Pepsi 2l', 700, 12, 'NÃO CONTÉM GLÚTEM. NÃO ALCOÓLICO,', 4),
('Cerveja Heineken 600ml', 1200, 500, 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado.', 4),
('Água mineral sem gás', 130, 478, 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 4),
('Vassoura', 2350, 30, 'Pigmento, matéria sintética e metal', 5),
('Saco para lixo', 1340, 90, 'Reforçado para garantir mais segurança', 5),
('Escova dental', 1000, 44, 'Faça uma limpeza profunda com a tecnologia inovadora', 5),
('Balde para lixo 50l', 2290, 55, 'Possui tampa e fabricado com material reciclado', 5),
('Manga', 198, 176, 'Rico em vitamina A, potássio e vitamina C', 1),
('Uva', 420, 90, 'NÃO CONTÉM GLÚTEM', 1);

-- 3 - Alimentar a tabela `clientes`

INSERT INTO clientes
(cpf, nome)
VALUES
('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');


-- 4 - Alimentar a tabela `vendedores`

INSERT INTO vendedores
(cpf, nome)
VALUES
('82539841031 ', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

-- 5

-- a)
UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 1;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 10;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 6
WHERE id = 11;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 15;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 5
WHERE id = 2;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (
    ((SELECT preco FROM produtos WHERE id = 1) * 1) + 
    ((SELECT preco FROM produtos WHERE id = 10) * 1) + 
    ((SELECT preco FROM produtos WHERE id = 11) * 6) +
    ((SELECT preco FROM produtos WHERE id = 15) * 1) +
    ((SELECT preco FROM produtos WHERE id = 2) * 5),
    '80371350042',
    '28007155023'
);

-- b)

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 10
WHERE id = 17;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 3
WHERE id = 18;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 5
WHERE id = 1;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 10
WHERE id = 5;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 2
WHERE id = 6;


INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (
    ((SELECT preco FROM produtos WHERE id = 17) * 10) + 
    ((SELECT preco FROM produtos WHERE id = 18) * 3) + 
    ((SELECT preco FROM produtos WHERE id = 1) * 5) +
    ((SELECT preco FROM produtos WHERE id = 5) * 10) +
    ((SELECT preco FROM produtos WHERE id = 6) * 2),
    '63193310034',
    '23262546003'
);

-- c)

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 13;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 6
WHERE id = 12;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 5
WHERE id = 17;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (
    ((SELECT preco FROM produtos WHERE id = 13) * 1) + 
    ((SELECT preco FROM produtos WHERE id = 12) * 6) + 
    ((SELECT preco FROM produtos WHERE id = 17) * 5),
    '75670505018',
    '23262546003'
);

-- d)

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 16;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 6
WHERE id = 18;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 7;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 3
WHERE id = 1;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 20
WHERE id = 5;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 2
WHERE id = 6;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (
    ((SELECT preco FROM produtos WHERE id = 16) * 1) + 
    ((SELECT preco FROM produtos WHERE id = 18) * 6) + 
    ((SELECT preco FROM produtos WHERE id = 7) * 1) +
  	((SELECT preco FROM produtos WHERE id = 1) * 3) +
  	((SELECT preco FROM produtos WHERE id = 5) * 20) +
  	((SELECT preco FROM produtos WHERE id = 6) * 2),
    '75670505018',
    '82539841031'
);

-- e)

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 8
WHERE id = 18;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 8;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 3
WHERE id = 17;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 8
WHERE id = 5;

UPDATE PRODUTOS
SET
quantidade_em_estoque = quantidade_em_estoque - 2
WHERE id = 11;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf)
VALUES (
    ((SELECT preco FROM produtos WHERE id = 18) * 8) + 
    ((SELECT preco FROM produtos WHERE id = 8) * 1) + 
    ((SELECT preco FROM produtos WHERE id = 17) * 3) +
  	((SELECT preco FROM produtos WHERE id = 5) * 8) +
  	((SELECT preco FROM produtos WHERE id = 11) * 2),
    '67642869061',
    '82539841031'
);