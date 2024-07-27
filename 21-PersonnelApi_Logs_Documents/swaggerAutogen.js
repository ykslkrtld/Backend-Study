"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

// Documentation
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express

// Swagger Autogen
// https://swagger-autogen.github.io/docs/

require('dotenv').config()
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 8000


/* ------------------------------------------------------- *

const options = {
	openapi:          <string>,     // Enable/Disable OpenAPI.                        By default is null
	language:         <string>,     // Change response language.                      By default is 'en-US'
	disableLogs:      <boolean>,    // Enable/Disable logs.                           By default is false
	autoHeaders:      <boolean>,    // Enable/Disable automatic headers recognition.  By default is true
	autoQuery:        <boolean>,    // Enable/Disable automatic query recognition.    By default is true
	autoBody:         <boolean>,    // Enable/Disable automatic body recognition.     By default is true
	writeOutputFile:  <boolean>     // Enable/Disable writing the output file.        By default is true
};
/* ------------------------------------------------------- */

// const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0', language: 'tr-TR' })
const swaggerAutogen = require('swagger-autogen')() // default ayarlarla çalışır

const packageJson = require('./package.json')

const document = { // ön tanımlamalar
    // info: {
    //     version: '1.0.0',
    //     title: 'Personnel Api',
    //     description: 'Personnel Management System API Service v.1',
    //     termOfService: 'http://127.0.0.1:8000/#',
    //     contact: { name: 'Clarusway', email: 'yksl@yksl.com'},
    //     licence: {name: 'Apache Licence'}
        
    // },
    info: {
        version: packageJson.version,
        title: packageJson.name,
        description: packageJson.description,
        // termOfService: 'http://127.0.0.1:8000/#',
        contact: { name: packageJson.author, email: 'yksl@yksl.com'},
        license: {name: packageJson.license}
        
    },
    host: `${HOST}:${PORT}`,
    basePath: '/',
    schemes: ['http', 'https'],
    // SimpleToken Settings
    securityDefinitions: {
        Token: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Simple Token Authentication * Example: <b>Token ...tokenKey...</b>'
        }
    },
    security: [
        { Token: [] }
    ],
    // Model definition // yeni bir projede sadece definitions değiştirilse yetecek (ufak tefek birkaçşey olabilir örn: packagejson içeriği)
    definitions: {
        "Department": require('./src/models/department.model').schema.obj,
        "Personnel": require('./src/models/personnel.model').schema.obj
        // Token model gizli modeldir dökümantasyona eklenmez
    }

}

const routes = ['./index.js'] // hangi routelar getirilecek
const outputFile = './swagger.json' // ortaya çıkardığı jsonu şu isimli dosyayı oluşturarak işle

// Run
swaggerAutogen(outputFile, routes, document)

// ayrı bir terminalde node swaggerAutogen.js yapılacak
