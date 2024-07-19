'use strict';

class CustomError extends Error {
    name = 'CustomError'
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

module.exports = CustomError