"use strict"
/* ----------------------------------------------- *

    NODEJS EXPRESS & ROUTINGS

/* ----------------------------------------------- */
// https://expressjs.com/
// npm init -y projeyi ayağa kaldır / packagejson oluştur
// $ npm i express dotenv
// .env ve .gitignore oluştur

const express = require('express')  // express içerisinde çalışan http var.
const app = express() // artık bu app isimli değişken bir express framework

/* ----------------------------------------------- */
// http.createServer((req, res) => {
//     if (req.url = '/') {
//         if (req.method == 'GET') {
//         } else {
//         }
//     } else if (req.url = '/second') {
//     }
// })


// path ve callback alır
app.get('/', (req, res) => {
    // res.end('app.get çalıştı')

    // const obj = {
    //     error: false,
    //     message: 'Welcome'
    // }
    // res.end(JSON.stringify(obj))


    // SEND METHOD:
    // res.send('Welcome to World')

    // res.send({
    //     error: false,
    //     message: 'Welcome'
    // })

    // res.send([0, 1, 2])
    // res.send çalışınca durdurur ve alttaki kodları görmez. üstteki 3'ünü aynı anda yazsak ilkini verir kalan ikisini okumaz


    // STATUS METHOD:
    // res.status(404)
    // res.send({
    //     error: false,
    //     message: 'Page Not Found'
    // })

    // Output:
    res.status(404).send({
        error: false,
        message: 'Page Not Found'
    })
    
})
app.post('/', (req, res) => {
    res.end('app.post çalıştı')  
})
app.put('/', (req, res) => {
    res.end('app.put çalıştı')  
})
app.delete('/', (req, res) => {
    res.end('app.delete çalıştı')  
})
/* ----------------------------------------------- *

// app.get('/', (req, res) => { res.end('app.get çalıştı')})
// app.post('/', (req, res) => { res.end('app.post çalıştı')})
// app.put('/', (req, res) => { res.end('app.put çalıştı')})
// app.delete('/', (req, res) => { res.end('app.delete çalıştı')})


// ALL METHOD:
// app.all('/', (req, res) => { res.end('app.all çalıştı')})


// ROUTE METHOD:
// ortak urlye farklı method kullanmak için route kullanılır.
app.route('/')
    .get((req, res) => { res.end('app.get çalıştı')})
    .post((req, res) => { res.end('app.post çalıştı')})
    .put((req, res) => { res.end('app.put çalıştı')})
    .delete((req, res) => { res.end('app.delete çalıştı')})

/* ----------------------------------------------- *

// URL (path) Options:

app.get('/', (req, res) => { res.send('burası anasayfa')}) // / == Anasayfa (home path)
app.get('/path', (req, res) => { res.send('burası "path" sayfası')}) // "/path" == "/path/"


// Express Joker karakterleri destekler: (RexExp kuralları ile aynı)
// parantezin varlığının hiçbir önemi olmaz

// app.get('/abc(x?)123', (req, res) => { res.send('now in here: /abc(x?)123')}) // abc123 == abcx123 ------ örn: /abc(x?)(y?)123 x de y de olsa da olur olmasa da olur ancak /abc(x?)(yz?)123 durumda parantezin zaten etkisi yok bu nedenle abcy123 olmalı x ve z olsa da olur olmasa da olur
// app.get('/abc(x+)123', (req, res) => { res.send('now in here: /abc(x+)123')}) // abcx..x123 ------- +'nın solundaki karakter en az 1 adet olmalı üst limit yok
// app.get('/abc123(x+)', (req, res) => { res.send('now in here: /abc123(x+)')}) // abcx..x123
// app.get('/abc*123', (req, res) => { res.send('now in here: /abc*123')}) // abc123 == abc(ANY)123  ------ * yerine hiçbirşey yazılmayadabilir sonsuz karakterde girebilir.


// Express RegularExpression destekler: https://regexr.com/
// app.get(/xyz/, (req, res) => { res.send('now in here: /xyz/')}) // içinde xyz geçen url'yi kabul et.
// app.get(/xyz$/, (req, res) => { res.send('now in here: /xyz$/')}) // xyz ile biten url'yi kabul et.
// app.get(/^\/xyz/, (req, res) => { res.send('now in here: /^\/xyz/')}) // xyz ile biten url'yi kabul et.

/* ----------------------------------------------- *

// URL Parameters:

app.get('/*', (req, res) => {

    res.send({
        url: {
            protocol: req.protocol,
            secure: req.secure,
            hostname: req.hostname,
            // baseUrl: req.baseUrl, // artık req.url geçerli
            params: req.params,
            query: req.query, // Sadece query verir. (path vermez.)
            path: req.path, // Sadece subfolder (/name/name1/name2) verir. (query vermez)
            originalUrl: req.originalUrl, // URL'yi tümüyle verir.
            url: req.url // Router URL'sini verir.
        }
    })

})



/* ----------------------------------------------- *

// app.get('/user/:userId/config/:process', (req, res) => {

//     res.send({
//         userId: req.params.userId,
//         process: req.params.process,
//         url: {
//             params: req.params,
//         }
//     })

// })

// parametreleri app.get ile yazarken yazmak zorundayız ama queryleri burda yazmadan istek atarken ?a=b&c=d vb belirtmek yeterli

// app.get('/user/:userId([0-9]+)', (req, res) => {
app.get('/user/:userId(\\d+)', (req, res) => {

    res.send({
        path: req.path,
        userId: req.params.userId,
        abc: req.query.abc,
    })

})

/* ----------------------------------------------- */
// Response.Methods:

// sendStatus():
// app.get('/', (req, res) => { res.sendStatus(404) })

// status():
// app.get('/', (req, res) => { res.status(200).send({ message: 'OK' }) })
// app.post('/', (req, res) => { res.status(201).send({ message: 'Created' }) })
// app.put('/', (req, res) => { res.status(202).send({ message: 'Updated' }) })
// app.patch('/', (req, res) => { res.status(202).send({ message: 'Updated' }) })
// app.delete('/', (req, res) => { res.status(204).send({ message: 'Deleted' }) })

// json() (send() methodunu kullanabiliriz)
// app.get('/', (req, res) => { res.json({ message: 'OK' }) })

// download():
// app.get('/download', (req, res) => { res.download('./readme.md') })
// app.get('/download', (req, res) => { res.download('./readme.md', 'newName.txt') })

// sendFile():
// console.log(__dirname)
// app.get('/package', (req, res) => { res.sendFile(__dirname + '/package.json') }) // dosya yolu TAM (gerçek) olmalı (__dirname ile tam yolu alabiliriz)

// redirect()
// app.get('/clarusway', (req, res) => { res.redirect('https://clarusway.com') }) // Varsayılan 302'dir
// app.get('/301', (req, res) => { res.redirect(301, 'https://clarusway.com') }) // Kalıcı yönlendirme yapar. Yönlendirme silinse bile tarayıcı geçmişi kaldığı sürece gelir
// app.get('/302', (req, res) => { res.redirect(302, 'https://google.com') }) // Geçici yönlendirme yapar. Yönlendirme silinirse tarayıcı da gelmez



/* ----------------------------------------------- */
// dotenv çalıştır:
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))
/* ----------------------------------------------- */