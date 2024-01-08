-- 1
SELECT compositor, id FROM musicas

-- 2
SELECT composicao, tempo FROM musicas WHERE tempo > 60*4

-- 3
SELECT compositor, composicao, FROM musicas WHERE id between 47 and 123

-- 4
SELECT * FROM musicas WHERE compositor is not null AND tempo < 60*5 AND compositor != 'Bach'

-- 5
SELECT composicao, tempo FROM musicas WHERE compositor = 'Mozart' OR compositor = 'Bach'

-- 6
SELECT * FROM musicas ORDER BY id DESC

-- 7
SELECT * FROM musicas ORDER BY tempo DESC

-- 8
SELECT * FROM musicas ORDER BY tempo LIMIT 5

-- 9
SELECT * FROM musicas ORDER BY tempo DESC LIMIT 10

-- 10
SELECT * FROM musicas ORDER BY tempo LIMIT 10 OFFSET 5

-- 11
SELECT * FROM musicas LIMIT 10 OFFSET 10+10+10

-- 12
SELECT * FROM musicas LIMIT 12 OFFSET 12*5

-- 13
SELECT DISTINCT compositor FROM musicas WHERE compositor is not null

-- 14
SELECT DISTINCT compositor, composicao FROM musicas

-- 15
SELECT * FROM musicas WHERE compositor LIKE 'Bra%'

-- 16
SELECT * FROM musicas WHERE ritmo LIKE '%troppo'

-- 17
SELECT * FROM musicas WHERE composicao ILIKE '%quartet%'

-- 18
SELECT * FROM musicas WHERE NOT composicao ILIKE  '%quartet%'

