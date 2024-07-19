-- Active: 1718304540935@@127.0.0.1@5432@test_db
SELECT * FROM Album;
SELECT * FROM "Artist";

SELECT * FROM "Album" INNER JOIN "Artist" ON "Album"."ArtistId" = "Artist"."ArtistId";
SELECT alb."AlbumId", alb."Title", art."Name" AS "Album Artist" FROM "Album" as alb INNER JOIN "Artist" as art ON alb."ArtistId" = art."ArtistId";

SELECT * FROM Customer;
SELECT * FROM Invoice;
SELECT c.CustomerId, c.FirstName, c.LastName, i.Total FROM Customer AS c JOIN Invoice i ON c.CustomerId = i.CustomerId;

SELECT * FROM Album AS a LEFT JOIN Artist r ON a.ArtistId = r.ArtistId; --soldaki tablaya göre
SELECT * FROM Album AS a RIGHT JOIN Artist r ON a.ArtistId = r.ArtistId; --sağdaki tabloya göre

SELECT a.AlbumId, a.Title, r.Name AS 'Artist Name' 
    FROM Album AS a INNER JOIN Artist r 
    ON a.ArtistId = r.ArtistId ORDER BY r.Name DESC; --ASC küçükten büyüğe sıralar 
                                                     --DESC BÜYÜKTEN KÜÇÜĞE SIRALAR

-- -- -- -- -- -- -- --  FUNCTIONS -- -- -- -- -- -- -- --
-- * COUNT -- Kayıt sayısı
SELECT count(*) AS 'Kayıt Sayısı' FROM Album;
SELECT count(*) AS 'KayıtSayısı' FROM Album;
SELECT count(*) AS `Kayıt Sayısı` FROM Album;

SELECT count(AlbumId) FROM Album;

-- * SUM -- Toplam
SELECT sum(Total) FROM Invoice;
SELECT * FROM Invoice WHERE BillingCountry IN ('USA', 'Canada');
SELECT * FROM Invoice WHERE BillingCountry IN ('USA', 'Canada');

-- * AVG -- Ortalama
SELECT avg(Total) FROM Invoice;
-- * MIN -- Minimum Değer
SELECT min(Total) FROM Invoice;
-- * MAX -- Maximum Değer
SELECT max(Total) FROM Invoice;

-- * ROUND -- Yuvarlama
SELECT round(avg(Total), 2) FROM Invoice;
-- * LENGTH -- Karakter sayısı (Kayıt sayısını tek satıra düşürmez. Her kaydın karakter sayısını aynı satıra yazar.)
SELECT Title, length("Title") FROM Album;

--------- Postgres SQL --------------------------------
SELECT * FROM Invoice;
SELECT * FROM Invoice WHERE BillingCountry = 'USA';
SELECT DISTINCT(BillingCountry) FROM Invoice;
SELECT BillingCountry, count(InvoiceId) FROM Invoice GROUP BY BillingCountry;

SELECT BillingCountry, 
	    COUNT(InvoiceId) AS faturaSayisi, 
	    SUM(Total) AS toplam, 
	    MIN(Total) AS minimum, 
	    MAX(Total) AS maximum,
	    ROUND(AVG(Total), 2) AS ortalama
    FROM Invoice
    GROUP BY BillingCountry;

SELECT Country, count(Country) AS "CountryCount" FROM Customer GROUP BY Country HAVING "CountryCount">1;

------------------------ CRUD --------------------------------
insert --yeni kayıt >   C
select --sorgu >        R
update --güncelleme >   U
delete --silme >        D

SELECT * FROM Genre;
INSERT INTO Genre (GenreId, Name) VALUES (26, 'Halk Müziği');
INSERT INTO Genre (GenreId, Name) VALUES(29, 'Türk Halk Müziği >'),(30, 'Pop Müziği >');
INSERT INTO genre (genreid,name) VALUES(27,'Turk Halk Muzigi'),(28,'Pop Muzigi');

--Tehlikeli Komutlar (Delete, Update)
UPDATE Genre SET Name = 'Türk Pop Müziği' WHERE GenreId = 30;
DELETE FROM Genre WHERE GenreId = 29;
UPDATE Track SET milliseconds = 0;
DELETE FROM Genre;
SELECT * FROM Track;
------------------------------------------------
