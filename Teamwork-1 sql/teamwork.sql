-- Active: 1718299271754@@127.0.0.1@3306
SELECT name, composer FROM Track;


SELECT * FROM Track;


SELECT DISTINCT composer FROM track;


SELECT DISTINCT albumId, mediatypeid FROM track;


SELECT Name, TrackId FROM track WHERE Composer = 'Jorge Be';


SELECT * from invoice WHERE total > 25;


SELECT * FROM invoice WHERE total < 15 LIMIT 5


SELECT * FROM invoice WHERE Total > 10 ORDER BY total DESC LIMIT 2


SELECT * FROM invoice WHERE billingcountry != 'Canada' ORDER BY total LIMIT 10;


SELECT invoiceID, customerId, total FROM invoice ORDER BY customerid ASC, total DESC;


SELECT name FROM Track WHERE name LIKE 'B%s';


SELECT invoiceDate FROM invoice WHERE invoicedate BETWEEN '2008-01-01' AND '2011-12-31' ORDER BY invoiceDate DESC LIMIT 1;


SELECT firstName, lastName from customer where country IN ('Norway', 'Belgium');


SELECT name, composer FROM track WHERE Composer LIKE '%Zappa%';


SELECT COUNT(*) FROM track;
SELECT COUNT(*) FROM invoice;


SELECT count(DISTINCT composer) from track


SELECT albumId, count(*) NumberOfTracks FROM track GROUP BY albumId ORDER BY NumberOfTracks DESC


-- SELECT Name, min(milliseconds) minDuration, max(milliseconds) maxDuration from track;
SELECT name, milliseconds FROM track ORDER BY milliseconds ASC LIMIT 1;
SELECT name, milliseconds FROM track ORDER BY milliseconds DESC LIMIT 1;


SELECT avg(milliseconds) from track;
SELECT name, milliseconds FROM track WHERE milliseconds < (SELECT avg(milliseconds) from track);


SELECT composer, count(composer) NumberOfTracks FROM track WHERE composer != '(NULL)' GROUP BY composer ORDER BY NumberOfTracks DESC;
SELECT composer, count(composer) NumberOfTracks FROM track WHERE not composer = '(NULL)' GROUP BY composer ORDER BY NumberOfTracks DESC;


SELECT track.name TrackName, genre.name GenreName FROM track JOIN genre ON track.GenreId = genre.GenreId;


SELECT artist.name ArtistName, album.title AlbumName FROM artist left JOIN album ON artist.artistId = album.artistId;


SELECT album.albumid, album.title, min(track.milliseconds) minDuration from album join track on album.albumid = track.albumid GROUP BY album.albumid ORDER BY minDuration DESC;


SELECT album.title, sum(track.milliseconds) totalDuration from album join track on album.albumid = track.albumid GROUP BY album.albumid HAVING totalDuration > 3600000 ORDER BY totalDuration DESC;


SELECT track."TrackId", track."Name", album."AlbumId" from track JOIN album on album.albumid = track.albumid WHERE album.title = "Prenda Minha" OR album.title = "Heart of the Night" OR album.title = "Out Of Exile";

SELECT Trackid, Name, Albumid
FROM track
WHERE albumid IN (
SELECT AlbumId
FROM album
WHERE Title IN ('Prenda Minha', 'Heart of the Night', 'Out Of Exile'));