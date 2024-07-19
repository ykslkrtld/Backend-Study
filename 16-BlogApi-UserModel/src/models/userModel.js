"use strict";

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const {Schema, model} = require('mongoose')

/* ------------------------------------------------------- */

// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto')

// Parameters
const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı
const loopCount = 10_000 // Döngü sayısı --- js _ kullanımını number olarak algılıyor
const charCount = 32 // write 32 for 64 --- istediğimiz karakter sayısının yarısını yazıyoruz ---- bufferType dan dolayı 2şerli aldığından yazdığımızın 2 katını veriyor
const encType = 'sha512' // şifreleme algoritması

// Return encrypted password
const passwordEncrypt = (password) => {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
    
}

console.log(passwordEncrypt('123456'))

/* ------------------------------------------------------- */


const UserSchema = new Schema({

    email: {
        type: String,
        trim: true,
        // unique: [true, 'unique is required'], // not supported
        unique: true,
        // required: true,
        required: [true, 'email is required'],
        // validate: (email) => { // return true ise kaydeder false ise kaydetmez hata verir
        //     if(email.includes('@') && email.includes('.')){
        //         return true
        //     } else {
        //         return false
        //     }
        // }
        // validate: (email) => (email.includes('@') && email.includes('.'))
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect'
        ]

    },

    password: {
        type: String,
        trim: true,
        // required: true,
        required: [true, 'password is required'],
        // set: (password) => { // veri kaydederken, return edilen data kaydedilir 
        //     return 'yuksel'
        // }
        // set: (password) => passwordEncrypt(password)
        // set:  passwordEncrypt,
        // set methodu validate methodundan önce çalışır. Dolayısıyla validate yapamayız
        // set: (password) => {
        //     if(password.length >= 8) {
        //         return passwordEncrypt(password)
        //     } else {
        //         return 'wrong'
        //     }
        // },
        // validate: (password) => {
        //     if(password == 'wrong') {
        //         return false
        //     } else {
        //         return true
        //     }
        // },
        set: (password) => (password.length >= 8 ?  passwordEncrypt(password) : 'wrong'),
        validate: (password) => (password != 'wrong') // Güncelleme yaparken default olarak validate çalışmaz. // { runValidators: true }
    },

    firstName: String,

    lastName: String,


},{
    collection: 'users',
    timestamps: true
})

// module.exports = mongoose.model('User', UserSchema) // Direct
module.exports.User = model('User', UserSchema) // in onject



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
