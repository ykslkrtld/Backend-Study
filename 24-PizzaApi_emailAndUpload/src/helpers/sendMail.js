"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

// sendMail(to, subject, message)

const nodemailer = require('nodemailer')


module.exports = function sendMail(to, subject, message) {

// GoogleMail (gmail)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yukselkurtuldu9@gmail.com',
        pass: 'pfxr qjgh jftk ffzl'
    }
})

// Send Mail
  transporter.sendMail({

  from: 'yukselkurtuldu9@gmail.com',
  //   to: 'developerygmh@gmail.com',
  to: to, 
  //   subject: 'Hello',
  subject: subject,
  //   text: 'Hello there. How are you',
  text: message,
  //   html: '<p> <b> Hello there</b> <br> How are you </p>'
  html: message

}, function (error, success) {

    success ? console.log('SUCCESS:', success) : console.log("ERROR:", error)

})

}