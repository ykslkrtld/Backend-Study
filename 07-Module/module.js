"use strict"
/* --------------------------------------------- */

// MODULES

/* --------------------------------------------- *

// DOSYAYI İÇE AKTARMA:

// require('./modules/index.js')
// require('./modules/index')
require('./modules/') // default file name: index

/* --------------------------------------------- *

// Import from Export

// const test = require('./modules/') // default file name: index
// test()

require('./modules/')()


/* --------------------------------------------- */

// const arrFunc = require('./modules/')
// console.log(arrFunc)
// arrFunc[0]()
// arrFunc[1]()
// arrFunc[2]()

// Array Destructing
// const [test1, test2, test3] = require('./modules/')
// test1()
// test2()
// test3()



// const objFunc = require('./modules/')
// objFunc.test1()
// objFunc.test2()
// objFunc.test3()


// Object Destructing
const {test1, test3:func3, test2, newVar} = require('./modules/')

test1()
test2()
func3()
console.log(newVar)






/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
