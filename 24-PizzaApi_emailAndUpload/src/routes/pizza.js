"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();

/* ------------------------------------------------------- */
// UPLOAD (Multer Middleware)
// npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

// const multer = require('multer')

// const upload = multer({
//     // dest: './uploads', // yerine storage kullanarak birden fazla ayar yapılabilir. örn isimlendirme
//     storage: multer.diskStorage({
//         destination: './uploads',
//         filename: function (req, file, returnCallback) {
//             // console.log('file', file)
//             // returnCallback(error, fileName)
//             // returnCallback(null, 'yksl.jpg') // istediğin isim
//             // returnCallback(null, file.originalname) // orjinal ismi
//             returnCallback(null, Date.now() + '_' + file.originalname) // aynı isimler karışmaması / dosya üzerine yazmaması için
//         }
//     })
// })

const upload = require('../middlewares/upload')

/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require("../controllers/pizza");

// URL: /pizzas

router.route("/")
  .get(pizza.list)
  // .post(upload.single('image'), pizza.create);
  .post(upload.array('image'), pizza.create);
  // .post(upload.any(), pizza.create);
  // .post(upload.none(), pizza.create);
  // gönderirken image ismi ile gödereceksin daha doğrusu orada belirtilen isim neyse. any ile isim vermeden istenildiği kadar gönderilebilir fakat isim belirleyerek daha güvenli olmasını sağlıyoruz. none() ile dosya yüklemesine izin verme

  /*
    <form action="/pizzas" method="POST" enctype="mutipart/form-data">
        <input type="file" name="image">
    </form>
  */ 

router
  .route("/:id")
  .get(pizza.read)
  .put(upload.single('image'), pizza.update)
  .patch(upload.single('image'), pizza.update)
  .delete(pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;

