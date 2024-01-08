-- 1

SELECT COUNT(medicamento) FROM farmacia;

-- 2

SELECT MIN(idade) FROM usuarios;


-- 3

SELECT MAX(idade) FROM usuarios;


-- 4

SELECT AVG(idade) FROM usuarios WHERE idade >= 18;

-- 5

SELECT categoria, SUM(estoque) AS somaEstoque FROM farmacia WHERE categoria IN ('blue', 'black') GROUP BY categoria;

-- 6

SELECT categoria, SUM(estoque) AS somaEstoque FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;



-- 7

SELECT categoria, SUM(estoque) AS somaEstoque FROM farmacia WHERE categoria IS NULL GROUP BY categoria;

-- 8

SELECT COUNT(id) as medicamentosSemCateroia FROM farmacia WHERE categoria IS NULL;

-- 9

SELECT CONCAT(medicamento, ' (', categoria, ')') FROM farmacia WHERE categoria IS NOT NULL;

-- 10

SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') FROM farmacia;

-- 11

SELECT nome, idade, CAST(cadastro AS DATE) FROM usuarios WHERE CAST(cadastro AS DATE) BETWEEN '2020-01-01' AND '2020-12-31';

-- 12

SELECT nome, idade, email, AGE(CAST(cadastro as TIMESTAMP)) FROM usuarios WHERE idade < 18;

-- 13

SELECT nome, idade, email, AGE(CAST(cadastro as DATE)) FROM usuarios WHERE idade > 60;

-- 14

SELECT categoria, COUNT(id) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 15

SELECT idade, COUNT(id) FROM usuarios WHERE idade >= 18 GROUP BY idade;

-- 16


