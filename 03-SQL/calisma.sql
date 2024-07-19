-- Active: 1718443160665@@127.0.0.1@5432@test_db
SELECT * FROM album;
SELECT * from artist;

SELECT * FROM album JOIN artist ON album."ArtistId"=artist."ArtistId";
SELECT * FROM album alb JOIN artist art ON alb."ArtistId"=art."ArtistId";

SELECT alb."AlbumId", alb."Title", art."Name" "Album Artist" FROM album alb JOIN artist art ON alb."ArtistId"=art."ArtistId";

 select min(total) from Invoice;

 SELECT c."CustomerId", c."FirstName", c."LastName", i."Total" FROM customer AS c JOIN invoice i ON c."CustomerId" = i."CustomerId"

 SELECT * FROM album a LEFT JOIN artist r ON a."ArtistId" = r."ArtistId"

 SELECT * FROM album a RIGHT JOIN artist r ON a."ArtistId" = r."ArtistId"

 SELECT a."AlbumId", a."Title", r."Name" ArtistName 
    FROM album a INNER JOIN artist r 
    ON a."ArtistId" = r."ArtistId" ORDER BY r."Name" DESC

SELECT count(*) "Kayıt Sayısı" FROM Album;

SELECT count(AlbumId) albumSayisi FROM album;

SELECT sum(Total) FROM invoice

SELECT * FROM invoice WHERE BillingCountry IN ("USA", "Canada")

SELECT avg(total) FROM invoice;
SELECT round(max(total)) FROM invoice;
SELECT min(total) FROM invoice;
SELECT round(1.56565, 3)

SELECT Title, length(Title) FROM Album;

----------- PostgreSQL ---------
SELECT * FROM album;

SELECT Title, length(Title) FROM Album;

SELECT billingCountry FROM invoice WHERE billingCountry = 'USA' GROUP BY billingCountry;

SELECT DISTINCT(billingCountry) FROM invoice;

SELECT billingCountry, count(invoiceId), round(avg(Total), 2) FROM invoice GROUP BY billingCountry;

SELECT billingCountry, count(invoiceId), round(avg(Total), 2) FROM invoice GROUP BY billingCountry HAVING (count(invoiceId)) > 7;

INSERT INTO Genre (GenreId, Name) VALUES (26, 'Halk Müziği');

INSERT INTO Genre (GenreId, Name) VALUES (27, 'Sanat Müziği'),(28, 'Pop Müziği');

SELECT * from genre

UPDATE GENRE SET NAME = 'Türk Halk Müziği' WHERE genreId = 26

UPDATE GENRE SET NAME = 'Türk Sanat Müziği' WHERE genreId = 27


UPDATE GENRE SET NAME = 'Türk Pop Müziği' WHERE genreId = 28

select * from genre;

DELETE FROM Genre WHERE GenreId = 28;
DELETE FROM Genre WHERE GenreId = 27;

SELECT * FROM Genre

INSERT INTO Genre (GenreId, Name) VALUES (27, 'Türk Sanat Müziği'),(28, 'Türk Pop Müziği');




