"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Gelen datayı al
// Gelen json datayı kabul et:
app.use(express.json())
// Gelen TEXT datayı kabul et:
app.use(express.text())
// Gelen FORM-URL-ENCODE kabul et:
app.use(express.urlencoded({extended: true})) // array olarak gelen datada deprecated hatası almamak için {extended: true} yazıyoruz

app.all('/', (req, res) => {

    res.send({
        params: req.params,  // Url de params tanımlı olmalı (/:id vb şekilde)
        query: req.query, // url de ?sonrası yazılan ='lik
        headers: req.headers,
        body: req.body
    })
})


// gelen urlye karşılık dosyayı bulacağın statik klasörü
// app.use('/images', express.static('./images') )
app.use('/public', express.static('./images') )



/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));