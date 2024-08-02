"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

// UPLOAD (Multer Middleware)
// npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require('multer')

module.exports = multer({
    // dest: './uploads', // yerine storage kullanarak birden fazla ayar yapılabilir. örn isimlendirme
    storage: multer.diskStorage({
        destination: './uploads',
        filename: function (req, file, returnCallback) {
            // console.log('file', file)
            // returnCallback(error, fileName)
            // returnCallback(null, 'yksl.jpg') // istediğin isim
            // returnCallback(null, file.originalname) // orjinal ismi
            returnCallback(null, Date.now() + '_' + file.originalname) // aynı isimler karışmaması / dosya üzerine yazmaması için
        }
    })
})