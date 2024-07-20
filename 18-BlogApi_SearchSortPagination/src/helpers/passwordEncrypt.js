"use strict";

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */


// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto')

// Parameters
const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı
const loopCount = 10_000 // Döngü sayısı --- js _ kullanımını number olarak algılıyor
const charCount = 32 // write 32 for 64 --- istediğimiz karakter sayısının yarısını yazıyoruz ---- bufferType dan dolayı 2şerli aldığından yazdığımızın 2 katını veriyor
const encType = 'sha512' // şifreleme algoritması

// Return encrypted password
module.exports = (password) => {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
    
}

/* ------------------------------------------------------- */