"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()


// Call controller
const { auth } = require('../controllers/authController') // camelCase: controller, PascalCase: Model // obje içinde gönderildiğinden bu şekilde almak gerekiyor

/* ------------------------------------------------------- */

// URL: /auth ->

router.post('/login', auth.login)
// router.post('/logout', auth.logout)
router.all('/logout', auth.logout)




/* ------------------------------------------------------- */
module.exports = router
