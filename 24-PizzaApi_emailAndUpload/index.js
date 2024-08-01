"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// EMail
// nodemailer.com
// npm install nodemailer

// const nodemailer = require('nodemailer')

// Create Test Account
// nodemailer.createTestAccount().then((data) => console.log(data)) // oluşturduktan sonra yoruma alalım ki sürekli oluşturmasın

/*
{
  user: 'a6cy7swp7xbjtbaj@ethereal.email',
  pass: 'M7H145VFgeRwx23C2g',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email',
  mxEnabled: false
} 

smtp: mail gönderme, diğer ikisi mail alma, pop3 mail kontrol  
*/

// // Connect to MailServer/SMTP
// const transporter = nodemailer.createTransport({
//   // SMTP:
//   host: 'smtp.ethereal.email',
//   port: '587',
//   secure: false,
//   auth: {
//     user: 'a6cy7swp7xbjtbaj@ethereal.email',
//     pass: 'M7H145VFgeRwx23C2g'
//   }
// })
// // console.log(transporter)

// // Send Mail
// transporter.sendMail({

//   from: 'a6cy7swp7xbjtbaj@ethereal.email',
//   to: 'yukselkurtuldu9@gmail.com', // ab@de.com, fg@hi.com  araya virgül koyarak biren fazla adrese gönderilebilir
//   subject: 'Hello',
//   text: 'Hello there. How are you',
//   html: '<p> <b> Hello there</b> <br> How are you </p>'

// }, function (error, success) {

//     success ? console.log('SUCCESS:', success) : console.log("ERROR:", error)

// })



// // GoogleMail (gmail)

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'yukselkurtuldu9@gmail.com',
//         pass: 'pfxr qjgh jftk ffzl'
//     }
// })

// Send Mail
//   transporter.sendMail({

//   from: 'yukselkurtuldu9@gmail.com',
//   to: 'developerygmh@gmail.com', // ab@de.com, fg@hi.com  araya virgül koyarak biren fazla adrese gönderilebilir
//   subject: 'Hello',
//   text: 'Hello there. How are you',
//   html: '<p> <b> Hello there</b> <br> How are you </p>'

// }, function (error, success) {

//     success ? console.log('SUCCESS:', success) : console.log("ERROR:", error)

// })




/* ------------------------------------------------------- */

// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.

