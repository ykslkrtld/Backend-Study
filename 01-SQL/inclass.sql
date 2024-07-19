-- Bu artık bir yorum satırıdır. SingleLine
/*
	MultiLine
	Comment
*/

-- SELECT 1 AS one -- Tek block işlemlerde sonunda ; koymak zorunda değiliz.
-- SELECT 2 AS two; -- komuttan sonra yorum için -- kullanabiliriz.
-- SELECT 1 AS one, /* araya yorum yazabilirim */ 2 AS two;

-- NOT CaseSensitive (Case-Insensitive)
-- Büyük harf, küçük harf ayırımı yapmaz.
-- SELECT 1 AS one;
-- select 1 AS one;

-- * Piyasa Standartları:
-- * * SQL Temel komutlarımı BÜYÜK harfle yazılır. SELECT * FROM ... WHERE ...;
-- * * String verilerde tek veya çift tırnak kullanabiliriz. Piyasa standartı tek tırnaktır. SELECT 'string' AS one;
-- * * Her bir temel komut ayrı satıra yazılır:
/*
SELECT *
FROM tableName
WHERE 1=1
ORDER BY ...
*/

-- -- -- -- -- SQL -- -- -- -- --

-- * SELECT - Seç ve getir
-- * FROM - Hangi tablodan?
-- SELECT * FROM Album; -- * = Tüm Sütunlar
-- SELECT AlbumId, Title FROM Album; -- İstediğim sutunları getir. -- Tavsiye edilen yöntem tek-tek yazmaktır.

-- * AS -- Tablo ve sutunları (geçici olarak) adlandırmak için kullanılır. -- Lakap takma
-- SELECT 3 AS number;
-- SELECT 'string' AS baslik;
-- SELECT 1+2 AS toplam;
-- SELECT AlbumId AS Numara, Title AS Baslik FROM Album; -- Sutun isimlendirme
-- SELECT AlbumId+3 AS Numara, Title AS Baslik FROM Album;
-- SELECT Album.AlbumId AS Numara, Album.Title AS Baslik FROM Album;
-- SELECT a.AlbumId AS Numara, a.Title AS Baslik FROM Album AS a; -- Tablo isimlendirme
-- SELECT a.AlbumId Numara, a.Title Baslik FROM Album a; -- AS yazmadan (boşluk bırakarak) isimlendirme yapabiliriz. -- Tavsiye edilen yöntem.






