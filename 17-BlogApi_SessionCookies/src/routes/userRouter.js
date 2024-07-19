"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()


// Call controller
const {user} = require('../controllers/userController') // camelCase: controller, PascalCase: Model // obje içinde gönderildiğinden bu şekilde almak gerekiyor

/* ------------------------------------------------------- */

// URL: /user ->

router.route('/')
    .get(user.list)
    .post(user.create)

router.route('/:userId')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)




/* ------------------------------------------------------- */
module.exports = router
