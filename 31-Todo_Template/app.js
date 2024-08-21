"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// AsyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// ROUTES:

// Model, controller'da kullanılacağı için orada require edilmelidir.
// const Todo = require('./app/models/todo.model')

app.use('/api', require('./app/routes/todo.router.api'))

/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require('./app/middlewares/errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));