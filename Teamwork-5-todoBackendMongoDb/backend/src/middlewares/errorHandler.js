'use strict';

module.exports = (err, req, res, next) => {
    console.log(err.statusCode);
    const statusCode = err.statusCode || res.statusCode || 500;

    return res.status(statusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
    })
}