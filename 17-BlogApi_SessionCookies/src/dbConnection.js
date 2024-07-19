"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Mongoose ODM
// npm i mongoose
// mongosh --version

const {connect} = require('mongoose')

const dbConnection = () => {

    // mongoose.connect('mongodb://localhost:27017/')
    connect(process.env?.MONGODB || 'mongodb://localhost:27017/blogAPI')
        .then(() => console.log('* DB Connected'))
        .catch(() => console.log('* DB Not Connected'))

}

module.exports = dbConnection