"use strict"
/* -------------------------------------------- *

    NODEJS

/* -------------------------------------------- */

// npm init -y ile dosya ilk açılınca ayağa kaldırılır.

// HTTP SERVER
const http = require('node:http') // node: gördüğümüz yerler, builtin module, dahilidir, npm ile almaya gerek yok,

/* -------------------------------------------- *


const app = http.createServer((request, response)=>{  // app isimli değişken artık bir server

    response.end('Hello world')
    console.log("console print")

})

// Default server domain (local domain) = localhost
// Default server IP (local IP) = 127.0.0.1
app.listen(8000, () => console.log('Server started: http://127.0.0.1:8000'))


/* -------------------------------------------- *

const app = http.createServer((req,res) => {
    // console.log(req)
    // console.log(res)
    // console.log(req.url)

    if(req.url == '/'){
        res.end('Main page')
    } else if ( req.url == '/second'){
        res.end("second page")
    } else {
        res.end("any page")
    }

})

app.listen(8000, () => console.log('http://127.0.0.1:8000'))


/* -------------------------------------------- */

const app = http.createServer((req,res) => {

    if(req.url == '/api'){

        // res.end('API') // res.end işlemi durdurur devam eden kodlar çalışmaz
        // res.end('123') 


        // res.write('yazi-1')
        // res.write('yazi-2')
        // res.write('yazi-3')
        // res.write('yazi-4')
        // res.end('end')


        if(req.method == 'GET') {

            // setHeader (single header)
            res.setHeader('title', 'values')

            // writeHead(statusCode, {multi headers})
            // sonda yer alması gereken methodlardandır
            // res.writeHead(404, {
            //     'content-encoding': 'utf-8',
            //     'multi-headers': 'test'
            // })

            // writeHead'de 2. parametre olarak statusMessage gönderebiliriz:
            res.writeHead(404, 'sayfa bulunamadi', { 
                'content-encoding': 'utf-8',
                'multi-headers': 'test'
            }) // writeHead, write komutundan önce gelmeli

            const obj = {
                result: true,
                message: 'Hello world'
            }
            res.write(JSON.stringify(obj))  // objeyi doğrudan ekrana basamayız o yüzden jsona çeviriyoruz
            // en sonda yer almalıdır
            res.end()
        } else {
            res.end('Wrong Method')
        }

    } else {
        res.end("HTML")
    }

}).listen(8000, () => console.log('http://127.0.0.1:8000'))




/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
