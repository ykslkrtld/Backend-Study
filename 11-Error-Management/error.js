"use strict";
const { error } = require("console");
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

// terminalden içerisne birden fazla satır yazacağımız dosya oluşturmak için cat > .gitignore yazıp enter sonra içeriği yapıştırıyoruz sonra control c ile çıkış yapıyoruz

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
// THROW:

app.get('/user/:id', (req, res) => {
    // arrow function yerine normal fonksiyon da yazılabilir callback olarak

    // hata gönder ve sistemi kilitle (kodlar işlemeye devam etmez) // Block codde
    // throw new Error('hata oluştu')
    
    // req.send({
    //     id: req.params.id,
    //     message: 'Hello world'
    // })

    if(isNaN(req.params.id)) {

        res.errorStatusCode = 400 // errorHandlera statusCode gönderdik, isim olarak errorStatusCode built-in birşey değil istediğimiz verebiliriz.

        throw new Error("ID parametresi sayı olmak zorundadır")

    } else {

        res.send('ID doğru')
    }

})

/* ------------------------------------------------------- *

// TRY-CATCH

app.get('/user/:id', (req,res) => {

    try {
        
        if(isNaN(req.params.id)) {
    
            throw new Error("ID parametresi sayı olmak zorundadır")
    
        } else {
    
            res.status(200).send({
                error: false,
                message: 'ID doğru herşey yolunda'
            })
        }

    } catch (err) {
    // Hata oluşursa catch çalışır ve hata, err parametresi ile gönderilir    

        res.status(400).send({
            error: true,
            message: err.message
        })
    }
})


/* ------------------------------------------------------- *

app.get('/user/:id', (req, res, next) => {

    try {
        
        if(isNaN(req.params.id)) {
    
            throw new Error("ID parametresi sayı olmak zorundadır")
    
        } else {
    
            res.status(200).send({
                error: false,
                message: 'ID doğru herşey yolunda'
            })
        }

    } catch (err) {
    // Hata oluşursa catch çalışır ve hata, err parametresi ile gönderilir    
       
        // next(error) ile hatayı errorHandlera gönderebiliriz
        next(err)
        // next() // içi boş gönderirsek bir sonraki middlewaree gider

        // res.status(400).send({
        //     error: true,
        //     message: err.message
        // })
    }
})

/* ------------------------------------------------------- *

// ASYNC

    const asyncFunction = async () => {
        throw new Error('async-error')
    }

    app.get('/async', async (req, res, next) => {

        await asyncFunction()
            .then() // çıktıda hata yok
            .catch((err) => { next(err) }) // çıktı da hata var

    })

/* ------------------------------------------------------- */

    // express-async-errors
    // npm i express-async-errors

    // ASYNC fonksiyonlardaki hataları then() ve catch() kullanmadan errorHandlera yönlendirir
    require('express-async-errors') // sadece require etmek yeterli, const ile tanımlamaya bir değişkene atamaya gerek yok

    const asyncFunction = async () => {
        throw new Error('async-error')
    }

    app.get('/async', async (req, res, next) => {

        // await asyncFunction()
        res.errorStatusCode = 400
        throw new Error('async-error', { cause: 'async function içinde bir hatadır'})  // üstte async fonksiyon tanımlamaya gerek kalmıyor then(), catch() yapılmayacağı için hatayı doğrudan bu async fonksiyon içerisinde verebiliriz

    })



/* ------------------------------------------------------- */

// Error handler 4 parametreli olmak zorunda. 1. parametre error parametresi olarak hata yakalar
// ErrorHandler sayfanın sonunda yer almalı

const errorHandler = (error, req, res, next) => {

    console.log('ErrorHandler çalıştı')

    const statusCode = res?.errorStatusCode || 500

    res.status(statusCode).send({
        error: true,
        message: error.message,
        cause: error.cause, // throw ile hata oluştururken mesajdan sonra , {cause: 'neden'}
        stack: error.stack // sistemin oluşturduğu mesaj
    })

}

// ErrorHandler son middleware olmalı
app.use(errorHandler)
// app.use(dfdfdsf) hatadan sonra geldiğinden içerisinde oluşabilecek bir hata errorHandlera iletilememiş olur.

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */



/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));