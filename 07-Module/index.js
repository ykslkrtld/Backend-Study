"use strict"

/* --------------------------------------------- */

// DOTENV

console.log("index çalıştı")

// npm install dotenv ile kurulur görevi .env dosyasını okumayı sağlar

require('dotenv').config() // değişkene atamaya gerek yok bu şekilde çalıştırılabilir

console.log(process.env.HOST)
console.log(process.env.PORT)
console.log(process.env.EXTRA)  // process.env ile .env dosyası içerisindeki değişkenlere ulaşılır.

// dışarıdan içeriye birşeyler göndermek için terminalden globalde oluşturarak process.env."oluşturalnın ismi(PORT,HOST vb) şeklinde olabilir"
// package.json içerisindeki scripts altında oluşturulan değişkenler npm run (değişken adı) şekliyle devamına da node (dosya adı örn;index) şeklinde çalıştırılarak çağırılabilir







/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
